import AES from 'crypto-js'

class NoEncryptionKeyError extends Error {
    constructor() {
        super('No encryption key provided')
        this.name = 'NoEncryptionKeyError'
    }
}

class NoEncryptedStringError extends Error {
    constructor() {
        super('No encrypted string provided')
        this.name = 'NoEncryptionKeyError'
    }
}

class NoObjectToEncryptError extends Error {
    constructor() {
        super('No object to encrypt')
        this.name = 'NoObjectToEncryptError'
    }
}

class TransferParseError extends Error {
    constructor() {
        super('Object failed to parse')
        this.name = 'TransferParseError'
    }
}

const encryptObject = ({ obj, encryptionKey }) => {
    if (!encryptionKey) {
        throw new NoEncryptionKeyError()
    } else if (!obj) {
        throw new NoObjectToEncryptError()
    }
    return AES.AES.encrypt(JSON.stringify(obj), encryptionKey).toString()
}

const decryptObject = ({ encryptedString, encryptionKey }) => {
    if (!encryptionKey) {
        throw new NoEncryptionKeyError()
    } else if (!encryptedString) {
        throw new NoEncryptedStringError()
    }
    const bytes = AES.AES.decrypt(encryptedString, encryptionKey)
    try {
        return JSON.parse(bytes.toString(AES.enc.Utf8))
    } catch (e) {
        throw new TransferParseError()
    }
}

export {
    encryptObject,
    decryptObject,
    NoEncryptedStringError,
    NoEncryptionKeyError,
    NoObjectToEncryptError,
    TransferParseError,
}
