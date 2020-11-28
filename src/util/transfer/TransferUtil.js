import AES from 'crypto-js'

const encryptObject = ({ obj, encryptionKey }) => {
    return AES.AES.encrypt(JSON.stringify(obj), encryptionKey).toString()
}

const decryptObject = ({ encryptedString, encryptionKey }) => {
    const bytes = AES.AES.decrypt(encryptedString, encryptionKey)
    return bytes.toString(AES.enc.Utf8)
}

export { encryptObject, decryptObject }
