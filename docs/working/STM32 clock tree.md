---
title: STM32 clock tree
createTime: 2025/07/17 14:56:24
permalink: /article/k5kh9q8h/
tags:
  - STM32
  - Clock
  - embeded
---
```mermaid
graph TB
    HSE[HSE] --> SYSCLK[SYSCLK]
    HSI[HSI] --> SYSCLK
    MSI[MSI] --> SYSCLK
    PLLCLK[PLLCLK] --> SYSCLK
    
    SYSCLK --> AHB_PRE[AHB Prescaler]
    AHB_PRE --> HCLK[HCLK]
    
    HCLK --> APB1_PRE[APB1 Prescaler]
    HCLK --> APB2_PRE[APB2 Prescaler]
    HCLK --> AHB[AHB]

    AHB --> DMA[DMA]
    AHB --> FLASH[FLASH]
    AHB --> GPIO[GPIO]
    
    APB1_PRE --> PCLK1[PCLK1]
    APB2_PRE --> PCLK2[PCLK2]
    
    PCLK1 --> TIM[Timer]
    PCLK1 --> SPI[SPI]
    PCLK1 --> USART[USART]

    PCLK2 --> TIM[Timer]
    PCLK2 --> SPI[SPI]
    PCLK2 --> USART[USART]

    
    style HSE fill:#90f,stroke:#333,stroke-width:2px
    style HSI fill:#90f,stroke:#333,stroke-width:2px
    style PLLCLK fill:#90f,stroke:#333,stroke-width:2px
    style MSI fill:#90f,stroke:#333,stroke-width:2px
    style SYSCLK fill:#6bf,stroke:#333,stroke-width:2px
    style HCLK fill:#b36,stroke:#333,stroke-width:2px
    style PCLK1 fill:#bfb,stroke:#333,stroke-width:2px
    style PCLK2 fill:#bfb,stroke:#333,stroke-width:2px