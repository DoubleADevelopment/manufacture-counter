//layouts
import { GitHubIcon, InstagramIcon } from '../../icons';
import { PageWithMenuLayout } from '../../layouts';
//variables
import { AppRouting } from '../../variables';
//styles
import style from './info-page.module.scss';

const InfoPage = (): JSX.Element => {
  return (
    <PageWithMenuLayout headerTitle={AppRouting.INFORMATION.title}>
      <main className={style['info-page']}>
        <section className={style.info}>
          <h2 className={style.info__title}>Info about application</h2>
          <p className={style.info__text}>
            Hi everyone! My name is Anton and this counter was specially made for the Aluplast
            company in Poznań!
          </p>
          <div className={style.info__stack}>
            <h3 className={style.info__subtitle}>technologies stack:</h3>
            <ul className={(style.info__text, style['info__stack-list'])}>
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
          <p className={style.info__text}>
            Check all my projects in my GitHub profile :) and subscribe in another's social media.
          </p>

          <div className={style.info__socials}>
            <a
              className={style['info__social-link']}
              href="https://github.com/AntonOshurek"
              target="blank"
            >
              <GitHubIcon color="#000" />
            </a>
            <a
              className={style['info__social-link']}
              href="https://www.instagram.com/ooshurek/"
              target="blank"
            >
              <InstagramIcon color="#000" />
            </a>
          </div>
        </section>
      </main>
    </PageWithMenuLayout>
  );
};

export default InfoPage;
