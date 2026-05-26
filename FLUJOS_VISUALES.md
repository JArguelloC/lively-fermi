# Groove Music Store - Arquitectura y Flujos Visuales

## 🏗️ ARQUITECTURA GENERAL DEL SISTEMA

```mermaid
graph LR
    subgraph "Frontend"
        A["React 18<br/>SPA"]
        A1["Router"]
        A2["Components"]
        A3["Pages"]
    end
    
    subgraph "State Management"
        B["Zustand<br/>authStore"]
        C["Zustand<br/>cartStore"]
        D["Zustand<br/>uiStore"]
        B1["CustomEvents<br/>cart:*"]
    end
    
    subgraph "Services"
        E["Firebase Auth"]
        F["Firestore DB"]
        G["Email Validator"]
        H["Cart Manager"]
    end
    
    subgraph "Storage"
        I["localStorage<br/>carrito"]
        J["sessionStorage<br/>sesión"]
    end
    
    A --> A1 --> A2
    A1 --> A3
    A2 --> B
    A2 --> C
    A2 --> D
    C --> B1
    B --> E
    C --> F
    C --> I
    C --> J
    A2 --> G
    A2 --> H
    H --> I
```

---

## 🎯 FLUJO CRÍTICO: USUARIO NUEVO → COMPRA

```mermaid
sequenceDiagram
    participant User as 👤 Usuario
    participant Browser as 🌐 Browser
    participant App as ⚛️ React App
    participant Firebase as 🔥 Firebase
    participant Cart as 🛒 Cart Store
    participant Email as ✉️ EmailValidator

    User ->> Browser: Visita groove-d9207.web.app
    Browser ->> App: Carga App.tsx
    App ->> Firebase: onAuthStateChanged()
    Firebase -->> App: user = null
    App ->> App: Mostrar Navbar (botón Login)
    
    User ->> Browser: Click Login
    Browser ->> App: Navega a /login
    App ->> User: Mostrar formulario registro
    
    User ->> Browser: Completa registro
    Browser ->> App: handleSubmit()
    App ->> Email: validateEmailDomain(email)
    Email -->> App: { valid: true }
    App ->> Firebase: createUserWithEmailAndPassword()
    Firebase -->> App: userCredential
    App ->> Firebase: sendEmailVerification()
    Firebase ->> User: Envía email verificación
    App ->> Firebase: setDoc(users/{uid})
    Firebase -->> App: ✓ Guardado
    App ->> Browser: navigate(/)
    Browser ->> User: Mostrar banner naranja<br/>Email pendiente
    
    User ->> Browser: Navega a /tienda
    Browser ->> App: Mostrar productos
    User ->> Browser: Selecciona producto
    Browser ->> App: Navega a /producto/slug
    App ->> User: Mostrar detalles
    
    User ->> Browser: Click "Añadir al Carrito"
    Browser ->> App: handleAddToCart()
    App ->> Cart: addItem(product, qty)
    Cart ->> localStorage: Guardar carrito
    Cart ->> Firebase: pushToFirebase() [async]
    Cart ->> App: Emitir evento
    App ->> Navbar: Detecta evento
    Navbar ->> Browser: Actualizar contador ✨
    
    User ->> Browser: Click Carrito (Navbar)
    Browser ->> App: Navega a /carrito
    App ->> Cart: items = cartStore.items
    App ->> User: Mostrar resumen
    
    User ->> Browser: Click "Proceder al Pago"
    Browser ->> App: Navega a /checkout
    
    User ->> User: Click email de verificación
    Firebase ->> Firebase: Verifica email
    App ->> App: Polling detecta cambio<br/>cada 3 segundos
    App ->> User: Banner desaparece
    
    User ->> Browser: Completa checkout
    Browser ->> App: handleConfirm()
    App ->> Firebase: Procesar pago
    Firebase -->> App: ✓ Éxito
    App ->> Cart: clearCart()
    Cart ->> localStorage: Limpiar
    Cart ->> Firebase: Limpiar carrito
    App ->> User: Redirigir a<br/>confirmación de compra
```

---

## 📊 DIAGRAMA DE DECISIONES: FLUJO AUTENTICACIÓN

```mermaid
graph TD
    Start(["👤 Usuario Nuevo"]) --> Choice1{¿Qué Hacer?}
    
    Choice1 -->|"Login"| Login["📧 Ir a /login"]
    Login --> LoginForm["Ingresar email<br/>y contraseña"]
    LoginForm --> ValidEmail1{Email<br/>válido?}
    ValidEmail1 -->|No| ErrorEmail1["❌ Formato inválido"]
    ErrorEmail1 --> LoginForm
    ValidEmail1 -->|Sí| ValidPass1{Contraseña<br/>mín 12 char?}
    ValidPass1 -->|No| ErrorPass1["❌ Muy corta"]
    ErrorPass1 --> LoginForm
    ValidPass1 -->|Sí| CheckFirebase["🔥 Consultar Firebase"]
    CheckFirebase --> ExistUser{¿Usuario<br/>existe?}
    ExistUser -->|No| ErrorUser["❌ Credenciales inválidas"]
    ErrorUser --> LoginForm
    ExistUser -->|Sí| LoginSuccess["✅ Login exitoso"]
    LoginSuccess --> HomePage["🏠 Redirigir a /"]
    
    Choice1 -->|"Registro"| Signup["📝 Ir a /login (modo registro)"]
    Signup --> SignupForm["Nombre, Email, Contraseña"]
    SignupForm --> ValidName{Nombre<br/>mín 3 char?}
    ValidName -->|No| ErrorName["❌ Nombre muy corto"]
    ErrorName --> SignupForm
    ValidName -->|Sí| ValidEmail2{Email<br/>válido?}
    ValidEmail2 -->|No| ErrorEmail2["❌ Formato inválido"]
    ErrorEmail2 --> SignupForm
    ValidEmail2 -->|Sí| CheckDisposable["🌐 Validar no desechable"]
    CheckDisposable --> Disposable{¿Dominio<br/>desechable?}
    Disposable -->|Sí| ErrorDisposable["❌ Email temporal rechazado"]
    ErrorDisposable --> SignupForm
    Disposable -->|No| ValidPass2{Contraseña<br/>fuerte?}
    ValidPass2 -->|No| ErrorPass2["❌ Contraseña débil"]
    ErrorPass2 --> SignupForm
    ValidPass2 -->|Sí| CreateUser["🔥 Crear en Firebase"]
    CreateUser --> SendEmail["✉️ Enviar verificación"]
    SendEmail --> SaveFirestore["💾 Guardar en Firestore"]
    SaveFirestore --> SignupSuccess["✅ Registro exitoso"]
    SignupSuccess --> HomePage
    HomePage --> Banner["📌 Mostrar banner<br/>Email pendiente"]
    
    Choice1 -->|"Olvidó Contraseña"| Recovery["🔑 Ir a /login (reset)"]
    Recovery --> RecoveryForm["Ingresar email"]
    RecoveryForm --> ValidEmail3{Email<br/>válido?}
    ValidEmail3 -->|No| ErrorEmail3["❌ Formato inválido"]
    ErrorEmail3 --> RecoveryForm
    ValidEmail3 -->|Sí| CheckEmail{¿Email<br/>registrado?}
    CheckEmail -->|No| ErrorCheckEmail["❌ Email no encontrado"]
    ErrorCheckEmail --> RecoveryForm
    CheckEmail -->|Sí| SendReset["📧 Enviar link reset"]
    SendReset --> RecoverySuccess["✅ Link enviado<br/>a tu email"]
    
    HomePage --> BannerDecision{¿Usuario<br/>verifica email?}
    BannerDecision -->|Click email| VerifySuccess["✅ Email verificado<br/>Banner desaparece"]
    BannerDecision -->|Click Reenviar| ResendEmail["📧 Reenviar verificación"]
    ResendEmail --> Toast["🔔 Toast: Enviado"]
    Toast --> Banner
    BannerDecision -->|Intenta comprar| CheckVerify{¿Email<br/>verificado?}
    CheckVerify -->|No| Warn["⚠️ Mostrar advertencia<br/>en checkout"]
    Warn --> CanContinue{¿Continuar<br/>de todas formas?}
    CanContinue -->|Sí| Checkout["Procesar pago"]
    CanContinue -->|No| GoAccount["Ir a /cuenta<br/>para reenviar"]
    CheckVerify -->|Sí| Checkout
    Checkout --> OrderSuccess["✅ Compra realizada"]
```

---

## 🛒 DIAGRAMA DE INTERACCIÓN: CARRITO

```mermaid
graph TD
    A["Tier 1: Datos"]
    A1["localStorage<br/>carrito_items"]
    A2["sessionStorage<br/>cart_session"]
    A3["Firestore<br/>carts/{uid}"]
    
    B["Tier 2: Store"]
    B1["cartStore<br/>Zustand"]
    
    C["Tier 3: Eventos"]
    C1["CustomEvents"]
    
    D["Tier 4: UI"]
    D1["Navbar"]
    D2["Cart Page"]
    D3["Checkout"]
    
    E["Tier 5: Acciones"]
    E1["addItem()"]
    E2["removeItem()"]
    E3["updateQuantity()"]
    E4["clearCart()"]
    
    A1 --> B1
    A2 --> B1
    A3 --> B1
    
    E1 --> B1
    E2 --> B1
    E3 --> B1
    E4 --> B1
    
    B1 --> C1
    C1 --> D1
    C1 --> D2
    C1 --> D3
    
    B1 --> A1
    B1 --> A3
    
    style A fill:#e1f5ff
    style B fill:#fff3e0
    style C fill:#fce4ec
    style D fill:#e8f5e9
    style E fill:#f3e5f5
```

---

## ✉️ POLLING DE EMAIL VERIFICATION

```mermaid
graph LR
    A["App inicia"]
    A --> B["useEffect: setPollInterval"]
    B --> C["Cada 3 segundos"]
    C --> D["¿user existe?"]
    D -->|Sí| E["¿emailVerified?"]
    D -->|No| C
    E -->|false| C
    E -->|true| F["user.reload()"]
    F --> G["Detecta cambio"]
    G --> H["setUser(user)"]
    H --> I["Banner desaparece"]
    I --> J["clearInterval"]
    
    style C fill:#fff9c4
    style F fill:#c8e6c9
    style I fill:#c8e6c9
```

---

## 🔄 CICLO DE VIDA: SESIÓN DE USUARIO

```mermaid
graph TD
    A["Visita 1: Nueva Sesión"] --> A1["sessionStorage vacío"]
    A1 --> A2["initializeCart() = []"]
    A2 --> A3["cartStore.items = []"]
    A3 --> A4["localStorage limpio"]
    
    B["Agrega productos<br/>A carrito"] --> B1["cartStore.addItem()"]
    B1 --> B2["localStorage ← items"]
    B2 --> B3{¿Autenticado?}
    B3 -->|Sí| B4["Firebase ← items"]
    B3 -->|No| B5["Solo localStorage"]
    
    C["Navega en sitio<br/>MISMA SESIÓN"] --> C1["sessionStorage = 'true'"]
    C1 --> C2["Recarga /carrito"]
    C2 --> C3["initializeCart()"]
    C3 --> C4["localStorage → cartStore"]
    C4 --> C5["Carrito persiste ✓"]
    
    D["Cierra navegador<br/>Abre nueva pestaña"] --> D1["Nueva sessionStorage"]
    D1 --> D2["sessionStorage = {}"]
    D2 --> D3["initializeCart() = []"]
    D3 --> D4["localStorage limpio"]
    D4 --> D5["Carrito vacío"]
    
    E["Usuario autenticado<br/>Cierra sesión"] --> E1["logout()"]
    E1 --> E2["clearSessionCart()"]
    E2 --> E3["localStorage vacío"]
    E3 --> E4["sessionStorage vacío"]
    E4 --> E5["Carrito vacío"]
    
    F["Usuario autenticado<br/>Recarga página"] --> F1["onAuthStateChanged()"]
    F1 --> F2["Cargar de Firebase"]
    F2 --> F3["cartStore.setCart()"]
    F3 --> F4["Carrito disponible"]
```

---

## 🎨 COMPONENTES PRINCIPALES Y RELACIONES

```mermaid
graph TB
    App["App.tsx<br/>Root"]
    
    Navbar["Navbar.tsx<br/>Navigation"]
    EmailBanner["EmailVerificationBanner.tsx<br/>Auth Alert"]
    Footer["Footer.tsx<br/>Footer"]
    
    Home["Home.tsx<br/>Showcase"]
    Category["CategoryPage.tsx<br/>Browse"]
    Product["ProductDetail.tsx<br/>Info"]
    Cart["Cart.tsx<br/>Review"]
    Checkout["Checkout.tsx<br/>Payment"]
    
    News["NewsHome.tsx<br/>Articles"]
    NewsDetail["ArticleDetail.tsx<br/>Full Post"]
    
    Login["Login.tsx<br/>Auth Forms"]
    Account["Account.tsx<br/>Profile"]
    Admin["AdminDashboard.tsx<br/>Management"]
    
    App --> Navbar
    App --> EmailBanner
    App --> Home
    App --> Category
    App --> Product
    App --> Cart
    App --> Checkout
    App --> News
    App --> NewsDetail
    App --> Login
    App --> Account
    App --> Admin
    App --> Footer
    
    Navbar -.->|authStore| Login
    Navbar -.->|authStore| Account
    Navbar -.->|cartStore| Cart
    
    Product -.->|addItem()| Cart
    Cart -.->|Link| Checkout
    Checkout -.->|clearCart()| Cart
    
    Login -.->|setUser()| Account
    Account -.->|logout()| Navbar
    Account -.->|verifyEmail| EmailBanner
    
    style App fill:#ffebee
    style Navbar fill:#e3f2fd
    style EmailBanner fill:#fff3e0
    style Home fill:#f3e5f5
    style Category fill:#e0f2f1
    style Product fill:#e8eaf6
    style Cart fill:#fce4ec
    style Checkout fill:#f1f8e9
    style Login fill:#ede7f6
    style Account fill:#e0f2f1
```

---

## 📈 FLUJO DE DATOS: CARRITO REACTIVO

```mermaid
graph LR
    User["👤 Usuario<br/>ProductDetail"]
    Add["Click Añadir"] 
    Store["cartStore<br/>.addItem()"]
    Event["emit<br/>CART_UPDATED"]
    Navbar["Navbar"]
    Counter["Contador<br/>actualiza"]
    
    LocalStorage["localStorage<br/>guardar"]
    Firebase["Firebase<br/>pushToFirebase"]
    
    User -->|Cantidad qty| Add
    Add -->|item, qty| Store
    Store -->|emitCartEvent| Event
    Store -->|persistCart| LocalStorage
    Store -->|pushToFirebase| Firebase
    Event -->|onCartChange listener| Navbar
    Navbar -->|actualiza DOM| Counter
    
    style User fill:#bbdefb
    style Add fill:#fff9c4
    style Store fill:#c8e6c9
    style Event fill:#f8bbd0
    style Counter fill:#c8e6c9
    style LocalStorage fill:#ffe0b2
    style Firebase fill:#b2dfdb
```

---

## 🔐 CAPAS DE SEGURIDAD

```mermaid
graph TD
    Layer1["Capa 1: Validación Frontend"]
    Layer1 --> L1A["Email format"]
    Layer1 --> L1B["Contraseña strength"]
    Layer1 --> L1C["Dominio no desechable"]
    
    Layer2["Capa 2: Firebase Auth"]
    Layer2 --> L2A["Email verification"]
    Layer2 --> L2B["Contraseña hasheada"]
    Layer2 --> L2C["Sessions seguras"]
    
    Layer3["Capa 3: Firestore Rules"]
    Layer3 --> L3A["Solo UID owner<br/>puede acceder"]
    Layer3 --> L3B["Read autenticado"]
    Layer3 --> L3C["Write validado"]
    
    Layer4["Capa 4: Datos"]
    Layer4 --> L4A["localStorage encriptado"]
    Layer4 --> L4B["sessionStorage temporal"]
    Layer4 --> L4C["Firestore persiste"]
    
    L1A --> L2A
    L1B --> L2B
    L1C --> L2C
    L2A --> L3A
    L2B --> L3B
    L2C --> L3C
    L3A --> L4A
    L3B --> L4B
    L3C --> L4C
    
    style Layer1 fill:#ffccbc
    style Layer2 fill:#b3e5fc
    style Layer3 fill:#c8e6c9
    style Layer4 fill:#ffe0b2
```

---

**Documento generado:** Mayo 23, 2026  
**Última actualización:** Deploy en vivo
