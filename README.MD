# Credential Issuance CLI

## Overview
This project is a Node.js-based CLI tool for creating and issuing credentials through an API.  
It guides the user through providing credential details, sending them to the API, preparing an Out-of-Band (OOB) invitation, and generating a QR code for sharing.

---

## Features
- **Interactive CLI** prompts for credential details.
- **Offer Creation** using provided schema and credential definition.
- **API Communication** for sending offers and generating OOB invitations.
- **QR Code Generation** (displayed in terminal).
- **Environment Variable Validation** to prevent missing configuration issues.

---


## Basic Setup
.env file and node js installed 


## Installation

```bash
$ yarn install 
```

## Running the app

```bash
# development
$ bash run.sh