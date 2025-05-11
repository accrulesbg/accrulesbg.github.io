import { Box, Button, Typography } from '@mui/material';
import CookieConsent from 'react-cookie-consent';

const CookieConsentBanner = ({ language }) => {
  return (
    <CookieConsent
      location="bottom"
      buttonText={language === 'en' ? 'Accept' : 'Приемам'}
      cookieName="accrules-cookie-consent"
      style={{
        background: 'linear-gradient(45deg, #1a237e 30%, #534bae 90%)',
        padding: '1rem',
        alignItems: 'center',
      }}
      buttonStyle={{
        background: '#c62828',
        color: 'white',
        fontSize: '1rem',
        padding: '0.5rem 1.5rem',
        borderRadius: '4px',
        marginLeft: '1rem',
      }}
      expires={150}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Typography variant="body1" sx={{ color: 'white' }}>
          {language === 'en' 
            ? 'We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.'
            : 'Използваме бисквитки, за да подобрим вашето изживяване. Продължавайки да посещавате този сайт, вие се съгласявате с използването на бисквитки.'}
        </Typography>
      </Box>
    </CookieConsent>
  );
};

export default CookieConsentBanner; 