import NavMenu from './components/NavMenu';
import { ThemeToggle } from 'components/ToggleTheme';

export default function Home() {
  return (
		<>
      <ThemeToggle />
			<NavMenu />
		</>
	);
}
