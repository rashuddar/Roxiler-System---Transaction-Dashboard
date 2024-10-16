import { Space } from 'antd';
import './App.css';
import AppHeader from './components/AppHeader';
import PageContent from './components/PageContent';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Space className='SideMenuAndPageContent'>
        <PageContent></PageContent>
      </Space>
    </div>
  );
}

export default App;
