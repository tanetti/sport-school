import { HeaderContainer, HeaderSizer, LogoLink } from './Header.styled';
import { useEffect, useState } from 'react';
import { SpriteIcon } from '@/components/shared';
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
    <HeaderContainer scrolled={isScrolled}>
      <HeaderSizer scrolled={isScrolled}>
        <LogoLink
          to="/"
          aria-label="Логотип ДЮСШ"
          scrolled={isScrolled.toString()}
        >
          <SpriteIcon symbol="logo" />
        </LogoLink>

        <HeaderNavigation isScrolled={isScrolled} />
      </HeaderSizer>
    </HeaderContainer>
  );
};
