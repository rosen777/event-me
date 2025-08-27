import { Theme as ThemeIcon } from './Icons';

const themeToggleId = 'theme';

const Header = `
<header>
    <hgroup>
        <h1 class=".parkinsans">event me</h1>
        <p>All the events you never knew you needed to attend!</p>
    </hgroup>
    <a href="#" role="toggle" id="${themeToggleId}"  title="Toggle color scheme" >
        ${ThemeIcon} 
    </a>
</header>
`;

const toggleDarkMode = () => {
    const doc = document.documentElement;
    const currentTheme = doc.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        doc.setAttribute('data-theme', 'lite');
    } else if (currentTheme === 'light') {
        doc.setAttribute('data-theme', 'dark');
    }
}
export function setupThemeToggle() {
    const themeToggle = document.getElementById(themeToggleId);
    themeToggle.addEventListener('click', toggleDarkMode);

}


export default Header
