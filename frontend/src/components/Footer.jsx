import React from 'react';

const Footer = () => {
    return (
        <footer style={{padding:12,background:'#20232a',color:'#bbb'}}>
            <div style={{maxWidth:960,margin:'0 auto',fontSize:14}}>
                <span>© {new Date().getFullYear()} CMS Gruppenarbeit</span>
                <span style={{float:'right'}}>
                    <a href="/datenschutz.txt" style={{color:'#61dafb',marginRight:20}}>Datenschutzerklärung</a>
                    <a href="/robots.txt" style={{color:'#61dafb'}}>Impressum</a>
                </span>
            </div>
        </footer>
    );
};

export default Footer;
