import { StackNavigator } from 'react-navigation';
import Repositories from './pages/repos';
import RepositoriesIssues from './pages/issues';

const Navigation = StackNavigator({
  repos: { screen: Repositories },
  reposIssues: { screen: RepositoriesIssues },
});

export default Navigation;
