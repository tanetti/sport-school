import Logo from '@/assets/logo.svg';
import { HeaderContainer, HeaderSizer, LogoImg } from './Header.styled';
import { useEffect, useState } from 'react';
import { HeaderNavigation } from '@/components';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY <= 30) return setIsScrolled(false);

      setIsScrolled(true);
    };

    addEventListener('scroll', onScroll);

    return () => removeEventListener('scroll', onScroll);
  }, []);

  return (
    <HeaderContainer isScrolled={isScrolled}>
      <HeaderSizer isScrolled={isScrolled}>
        <LogoImg src={Logo} alt="Логотип школи" />

        <HeaderNavigation />
      </HeaderSizer>
    </HeaderContainer>
  );
};
