---
title: USART timeout
createTime: 2025/07/17 15:36:49
permalink: /article/2wq0styu/
tags:
  - USART
  - Hardware
  - embeded
---
### USART Timeout Calculation
In general, USART considers a timeout communication after <font color="green">3.5 characters</font>  transmission time.

The timeout calculation formula is:

<font color="purple">Timeout = 3.5 &times; Character Frame Length &times; Single Bit Transmission Time</font>

Where:
- 3.5 is the standard timeout factor
- Character Frame Length = 1 start bit + 8 data bits + 1 parity bit + 1 stop bit = 11 bits
- Single Bit Transmission Time = 1000ms / Baudrate

For example:

| Baudrate | Calculation | Timeout |
|----------|-------------|---------|
| 9600   | 3.5 &times; 11 &times; (1000/9600)   | 4.01ms |
| 19200  | 3.5 &times; 11 &times; (1000/19200)  | 2.00ms |
| 115200 | 3.5 &times; 11 &times; (1000/115200) | 0.33ms |