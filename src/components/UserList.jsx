import React, { useEffect, useState } from 'react';
import { fetchUsers } from '../api';
import {List, Typography} from 'antd';

const {Title} = Typography;

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const loadUsers = async () => {
            try {
                const usersData = await fetchUsers();
                setUsers(usersData); 
            } catch (error) {
                console.error('Erro ao carregar usuários', error)
            }
        };

        loadUsers();
    }, []);

    return (
        <div>
            <Title level={3}>Lista de Usuários</Title>
            <List
                bordered
                dataSource={users}
                renderItem={user => (
                    <List.Item>
                        <a href={`/user/${user.id}`}>{user.name}</a>
                    </List.Item>
                )}
            />
        </div>
          
    );
};

export default UserList;