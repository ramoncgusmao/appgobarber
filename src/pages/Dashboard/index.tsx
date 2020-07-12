import React from 'react';
import { View, Button } from 'react-native';
import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'flex-end',
        padding: 20,
      }}
    >
      <Button title="Sair" onPress={signOut} color="#ff9000" />
    </View>
  );
};
export default Dashboard;
