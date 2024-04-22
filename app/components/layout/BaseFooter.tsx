'use client';

import { useTranslationContext } from '@/contexts/TranslationContext';

const BaseFooter = () => {
  const { _t } = useTranslationContext();

  return (
    <footer className='container py-10'>
      <p>
        JavaScript
        {_t('footer.developedBy')}{' '}
        <a
          href='https://github.com/akhil-naidu'
          target='_blank'
          rel='noopener noreferrer'
          style={{ textDecoration: 'underline' }}
        >
          Akhil Naidu
        </a>
      </p>
    </footer>
  );
};

export default BaseFooter;
