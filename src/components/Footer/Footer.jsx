import {
  ContactTitle,
  FooterContainer,
  CopyrightContainer,
  ContactContainer,
  CopyrightText,
  ContactList,
  ContactLink,
  SocialsList,
  LinkContainer,
  SocialLink,
  SocialLinkYouTube,
} from './Footer.styled';

export const Footer = () => {
  return (
    <FooterContainer>
      <ContactContainer>
        <ContactTitle>
          Залишились питання? <strong>Зв&apos;яжіться з нами!</strong>
        </ContactTitle>

        <LinkContainer>
          <SocialsList>
            <li>
              <SocialLink
                href="https://www.facebook.com/Slobozhanskedyussh"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Посилання до акаунту Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20 1a3 3 0 0 1 3 3v16a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3h16Zm0 2c.6 0 1 .4 1 1v16c0 .6-.4 1-1 1h-5v-7h2a1 1 0 0 0 1-.7l.5-1.3c.1-.5-.2-1-.7-1H15V9c0-.5.5-1 1-1h2c.6 0 1-.4 1-1v-.7c0-.3-.2-.6-.5-.7-1.3-.3-2.5-.3-2.5-.3-2.5 0-4 1.7-4 3.2V11h-2a1 1 0 0 0-1 1v1c0 .6.4 1 1 1h2v7H4a1 1 0 0 1-1-1V4c0-.6.4-1 1-1h16Z"
                  />
                </svg>
              </SocialLink>
            </li>

            <li>
              <SocialLink
                href="https://www.instagram.com/dyusshslob/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Посилання до акаунту Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
                  />
                  <path d="M18 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z" />

                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.7 4.3C1 5.6 1 7.3 1 10.6v2.8c0 3.4 0 5 .7 6.3a6 6 0 0 0 2.6 2.6c1.3.7 3 .7 6.3.7h2.8c3.4 0 5 0 6.3-.7a6 6 0 0 0 2.6-2.6c.7-1.3.7-3 .7-6.3v-2.8c0-3.4 0-5-.7-6.3a6 6 0 0 0-2.6-2.6c-1.3-.7-3-.7-6.3-.7h-2.8c-3.4 0-5 0-6.3.7a6 6 0 0 0-2.6 2.6ZM13.4 3h-2.8a51.7 51.7 0 0 0-5.4.4 4 4 0 0 0-1.8 1.8c-.1.3-.3.7-.3 1.6L3 10.6v2.8a51.7 51.7 0 0 0 .4 5.4 4 4 0 0 0 1.8 1.8c.3.1.7.3 1.6.3l3.8.1h2.8a51.7 51.7 0 0 0 5.4-.4 4 4 0 0 0 1.8-1.8c.1-.3.3-.7.3-1.6l.1-3.8v-2.8a51.7 51.7 0 0 0-.4-5.4 4 4 0 0 0-1.8-1.8c-.3-.1-.7-.3-1.6-.3L13.4 3Z"
                  />
                </svg>
              </SocialLink>
            </li>

            <li>
              <SocialLinkYouTube
                href="https://www.youtube.com/@dyussh_slobozganske"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Посилання до каналу YouTube"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.5 7.1A1 1 0 0 0 8 8v8a1 1 0 0 0 1.5.9l7-4a1 1 0 0 0 0-1.8l-7-4ZM14 12l-4 2.3V9.7l4 2.3Z"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 12c0-3.7 0-5.6 1-7a5 5 0 0 1 1-1c1.4-1 3.3-1 7-1h6c3.7 0 5.6 0 7 1l1 1c1 1.4 1 3.3 1 7s0 5.6-1 7a5 5 0 0 1-1 1c-1.4 1-3.3 1-7 1H9c-3.7 0-5.6 0-7-1a5 5 0 0 1-1-1c-1-1.4-1-3.3-1-7Zm9-7h6l4.2.1c.9.1 1.3.3 1.6.5l.6.6c.2.3.4.7.5 1.6a43.5 43.5 0 0 1-.5 10 3 3 0 0 1-.6.6c-.3.2-.7.4-1.6.5L15 19H9l-4.2-.1c-.9-.1-1.3-.3-1.6-.5a3 3 0 0 1-.6-.6c-.2-.3-.4-.7-.5-1.6a43.5 43.5 0 0 1 .5-10l.6-.6c.3-.2.7-.4 1.6-.5L9 5Z"
                  />
                </svg>
              </SocialLinkYouTube>
            </li>
          </SocialsList>

          <ContactList>
            <li>
              <ContactLink
                href="tel:+380689079646"
                aria-label="Подзвонити на номер +380689079646"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.35 22.23a21.73 21.73 0 0 1-9.9-5.68 21.73 21.73 0 0 1-5.68-9.9 2.76 2.76 0 0 1 1.12-2.92l2.33-1.66a3 3 0 0 1 4.2.73l1.47 2.12a2 2 0 0 1-.48 2.76l-1.17.84c.18.68.73 2.06 2.45 3.79 1.73 1.72 3.11 2.27 3.8 2.45l.83-1.17a2 2 0 0 1 2.76-.48l2.12 1.46a3 3 0 0 1 .73 4.21l-1.66 2.33a2.76 2.76 0 0 1-2.92 1.12Zm-8.49-7.1a19.65 19.65 0 0 0 8.98 5.16c.26.07.58-.03.8-.34l1.67-2.33a1 1 0 0 0-.25-1.4l-2.12-1.47-.9 1.26a1.8 1.8 0 0 1-1.82.74c-.99-.21-2.8-.9-4.94-3.03-2.14-2.13-2.82-3.95-3.03-4.94a1.8 1.8 0 0 1 .74-1.83l1.26-.9-1.47-2.11a1 1 0 0 0-1.4-.25L4.05 5.36c-.3.22-.4.54-.34.8a19.7 19.7 0 0 0 5.15 8.98Z"
                  />
                </svg>

                <span>+38 (068) 907-96-46</span>
              </ContactLink>
            </li>

            <li>
              <ContactLink
                href="mailto:dyussh.ssr@gmail.com"
                aria-label="Почати листування з dyussh.ssr@gmail.com"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.5 21a1 1 0 0 1-.4 1.2A11 11 0 1 1 23 12l-.1 1.7c-.3 2-1.2 5.3-3.9 5.3-2.3 0-3.1-1.3-3.4-2.2A6 6 0 1 1 18 12v4c0 1 .5 1 .5 1 1 0 1.5-.8 1.9-1.7l.1-.4c.5-1.4.5-2.9.5-2.9a9 9 0 1 0-5.8 8.4 1 1 0 0 1 1.3.5ZM8 12a4 4 0 1 0 8 0 4 4 0 0 0-8 0Z"
                  />
                </svg>

                <span>dyussh.ssr@gmail.com</span>
              </ContactLink>
            </li>

            <li>
              <address>
                <ContactLink
                  href="https://maps.app.goo.gl/nejgGh2bNBQMHvvBA"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Відкрити навігацію на Google Maps"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 14a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm0-2a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"
                    />

                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M21.3 11.6A9.6 9.6 0 0 0 12 0C6 0 1.4 5.8 2.7 11.6c1 4.7 5 9.2 7.5 11.6 1 1 2.6 1 3.6 0 2.4-2.4 6.5-7 7.5-11.6ZM12 2c4.7 0 8.3 4.6 7.3 9.1-.5 2.2-1.6 4.2-2.8 6a36.2 36.2 0 0 1-4 4.7c-.3.3-.7.3-1 0a36.2 36.2 0 0 1-4-4.7 16.8 16.8 0 0 1-2.8-6A7.6 7.6 0 0 1 12 2Z"
                    />
                  </svg>

                  <span>Слобожанське, вулиця Спортивна 4</span>
                </ContactLink>
              </address>
            </li>
          </ContactList>
        </LinkContainer>
      </ContactContainer>

      <CopyrightContainer>
        <CopyrightText>
          <span>
            Дитячо-юнацька спортивна школа Слобожанської селищної ради.&nbsp;
          </span>
          Всі права захищено &#169; 2024
        </CopyrightText>
      </CopyrightContainer>
    </FooterContainer>
  );
};
