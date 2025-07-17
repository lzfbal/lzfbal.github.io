---
title: Modbus protocol
tags:
  - modbus
  - protocol
  - embeded
createTime: 2025/07/16
permalink: /article/6gkj6g9h/
---
### Modbus RTU vs Modbus TCP/IP
1.Network Infrastructure
- Modbus TCP requires Ethernet infrastructure, making it more suitable for modern industrial control systems where Ethernet networks already exist. If your devices are already connected to Ethernet, using Modbus TCP communication might be more convenient.
- Modbus RTU doesn't require Ethernet; it can work with serial communication in more challenging environments, such as remote monitoring stations and long-distance communications.

2.Communication Speed
- Modbus TCP has higher transmission speed.
- Modubs RTU can also provide high-speed communication, but it typically operates at lower communication speeds, especially for long-distance communication.

3.Communication Distance
- Modbus TCP is suitable for relatively short communication distance and is commonly used in local area networks
- Modbus RTU is more suitable for long-distance communications.

### Modbud PDU(Protocol Data Unit)
|Device address|Function Code|Data|CRC|
|--------------|-------------|----|---|
|8 bits        |8 bits       |n bits|16 bits|

#### Example
Send data
|Address|function code|start register address|end register address|CRC|
|----|-------------|----------------------|--------------------|---|
|0x1|0x3         | 0x07D0                 | 0x07D1           |0x4728|

Receive data
|Address|function code|byte count|data|CRC|
|----|-------------|----------------------|--------------------|---|
|0x1|0x3         | 0x4 | 0x00010002            |0x4728|

Send data
|Address|function code|start register address|end register address|data|CRC|
|----|-------------|----------------------|--------------------|---|---|
|0x1|0x10         | 0x07D0                 | 0x07D1           |0x00010002  |0x4728|

Receive data
|Address|function code|start register address|end register address|CRC|
|----|-------------|----------------------|--------------------|---|
|0x1|0x10         | 0x07D0                 | 0x07D1         |0x4728|

### Function Code
| Function Code (Decimal) | Function Code (Hex) | Description |
|------------------------|---------------------|-------------|
| **Bit Access** ||||
| 01 | 0x01 | Read Coils |
| 02 | 0x02 | Read Discrete Inputs |
| 05 | 0x05 | Write Single Coil |
| 15 | 0x0F | Write Multiple Coils |
| **Word Access** ||||
| 03 | 0x03 | Read Holding Registers |
| 04 | 0x04 | Read Input Registers |
| 06 | 0x06 | Write Single Register |
| 16 | 0x10 | Write Multiple Registers |
| 23 | 0x17 | Read/Write Multiple Registers |
| **File Record Access** ||||
| 20 | 0x14 | Read File Record |
| 21 | 0x15 | Write File Record |
| **Diagnostics** ||||
| 07 | 0x07 | Read Exception Status |
| 08 | 0x08 | Diagnostic |
| 11 | 0x0B | Get Comm Event Counter |
| 12 | 0x0C | Get Comm Event Log |
| 17 | 0x11 | Report Slave ID |

### Exception Code
| Exception Code (Dec) | Exception Code (Hex) | Name | Description |
|---------------------|---------------------|------|-------------|
| 01 | 0x01 | ILLEGAL FUNCTION | Invalid Function Code<br>* Function code is not supported by slave<br>* Function is not allowed for the slave |
| 02 | 0x02 | ILLEGAL DATA ADDRESS | Invalid Data Address<br>* Address is not allowed for the slave<br>* Address range exceeds device limits |
| 03 | 0x03 | ILLEGAL DATA VALUE | Invalid Data Value<br>* Value in query data field is not allowed<br>* Value is outside the permitted range |
| 04 | 0x04 | SLAVE DEVICE FAILURE | Device Failure<br>* Unrecoverable error occurred while slave processing action |
| 05 | 0x05 | ACKNOWLEDGE | Acknowledge<br>* Slave accepted request<br>* Long duration of time to process |
| 06 | 0x06 | SLAVE DEVICE BUSY | Slave Device Busy<br>* Slave is processing a long-duration command<br>* Master should retry later |
| 07 | 0x07 | NEGATIVE ACKNOWLEDGE | Negative Acknowledge<br>* Slave cannot perform the program function |
| 08 | 0x08 | MEMORY PARITY ERROR | Memory Parity Error<br>* Slave detected a parity error in memory |
| 0A | 0x0A | GATEWAY PATH UNAVAILABLE | Gateway Path Unavailable<br>* Gateway cannot allocate a path for the request |
| 0B | 0x0B | GATEWAY TARGET DEVICE FAILED TO RESPOND | Gateway Target Device Failed to Respond<br>* No response from target device |