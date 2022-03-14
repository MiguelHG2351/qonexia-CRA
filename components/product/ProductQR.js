import QRcode from 'qrcode.react'

export default function ProductQR({ token }) {
    return (
        <QRcode
            className="inline-block"
            value={token}
            size={256}
            includeMargin={true}
            imageSettings={{
                src: '/static/images/brand/logo-without-text.png',
                width: 32,
                height: 32,
                excavate: true,
            }}
        />
    )
}
