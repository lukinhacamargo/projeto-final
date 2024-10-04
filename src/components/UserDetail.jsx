import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchUserById } from '../api';
import { Card, Typography, Spin } from 'antd';

const UserDetail = () => {
    const { id } = useParams();
    const [user, setUser] = useState(null);

    const loadUser = async () => {
        try {
            const userData = await fetchUserById(id);
            setUser(userData);
        } catch (error) {
            console.error('Erro ao carregar usuário', error);
        }
    };

    useEffect(() => {

        loadUser();
    }, [id]);

    if (!user) return <Spin size='large' style={{ display: 'block', margin: '20px auto' }} />;


    return (
        <Card title={user.name} style={{ margin: '20px' }}>
            <Typography.Paragraph>
                <strong>Email:</strong> {user.email}
            </Typography.Paragraph>
            <Typography>
                <strong>Telefone:</strong> {user.phone}
            </Typography>
            <Typography>
                <strong>Website:</strong> {user.website}
            </Typography>
        </Card>
    );
};

export default UserDetail;