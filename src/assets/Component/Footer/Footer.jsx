const Footer = () => {
    const footerStyle ={
        color: 'blue',
        backgroundColor: 'orange',
        marginTop: '200px',
        fontSize: '20px',
        padding: '60px',
        borderRadius: '12px'
    }
    return (
        <div style={footerStyle}>
            <p><small>Thank you for visiting our website</small></p>
        </div>
    );
};

export default Footer;