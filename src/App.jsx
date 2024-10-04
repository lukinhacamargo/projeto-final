import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserList from './components/UserList';
import UserDetail from './components/UserDetail';
import { Typography } from 'antd';

const { Title } = Typography;

const App = () => {
    return (
        <Router>
            <div style={{ padding: '20px' }}>
                <Title leve={2}>Meu Aplicativo de Usuários</Title>
                <Routes>
                    <Route path='/' element={<UserList />} />
                    <Route path='/user/:id' element={<UserDetail />} />
                </Routes>
            </div>
        </Router>
    );
};
export default App;