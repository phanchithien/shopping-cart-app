import { FunctionComponent } from "react";
import packageJson from '../../../package.json'
import classes from './footer.module.scss'

export const Footer: FunctionComponent = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className={classes.footer} data-cy="footer">
            <ul>
                <li className={classes.footerLink}>
                    <a 
                        href="https://twitter.com/ThienPh90101102"
                        target="_blank"
                        rel="noopener norefferer"
                        data-cy="twitterLink"
                    >
                        twitter
                    </a>{" "}
                    &bull;{" "}
                    <a 
                        href="https://github.com/phanchithien"
                        target="_blank"
                        rel="noopener norefferer"
                        data-cy="githubLink"
                    >
                        github
                    </a>
                </li>
                <li className={classes.footerCopyrights}>
                    © {packageJson.author} {currentYear}. All rights reserved.
                </li>
                <li>
                    <div className={classes.version}>v.{packageJson.version}</div>
                </li>
            </ul>
        </footer>
    )
}