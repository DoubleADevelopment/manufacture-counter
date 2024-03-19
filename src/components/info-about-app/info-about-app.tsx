//icons
import { GitHubIcon, InstagramIcon } from '../../icons';
//styles
import style from './info-about-app.module.scss';
//version from package.json
import packageJson from '../../../package.json';

const InfoAboutApp = (): JSX.Element => {
  const { version } = packageJson;
  return (
    <section className={style.info}>
      <h2 className={`content-primary-a heading-large`}>Info about application</h2>
      <p className={`content-primary-a paragraph-medium`}>
        Hi everyone! My name is Anton and this counter was specially made for the Aluplast company
        in Poznań!
      </p>
      <div className={style.info__stack}>
        <h3 className={`content-primary-a heading-medium`}>technologies stack:</h3>
        <ul className={`${style['info__stack-list']} content-primary-a label-large`}>
          <li>
            <code>javaScript</code>
          </li>
          <li>
            <code>React.JS</code>
          </li>
          <li>
            <code>TypeScript</code>
          </li>
          <li>
            <code>Redux</code>
          </li>
          <li>
            <code>SASS</code>
          </li>
        </ul>
      </div>
      <p className={`content-primary-a paragraph-medium`}>
        Check all my projects in my GitHub profile :) and subscribe in another's social media.
      </p>

      <div className={style.info__socials}>
        <a
          className={`${style['info__social-link']} content-primary-a`}
          href="https://github.com/AntonOshurek"
          target="blank"
        >
          <span className="visually-hidden">link na mój GitHub</span>
          <GitHubIcon />
        </a>
        <a
          className={`${style['info__social-link']} content-primary-a`}
          href="https://www.instagram.com/ooshurek/"
          target="blank"
        >
          <span className="visually-hidden">Link na mój instagram</span>
          <InstagramIcon />
        </a>
      </div>
      <p className="content-primary-a paragraph-small">version - {version}</p>
    </section>
  );
};

export default InfoAboutApp;
