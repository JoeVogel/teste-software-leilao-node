const { UserDAO } = require('../../src/userDAO');

describe('UserDAO (mock)', () => {

    test('deve adicionar usuário com sucesso', async () => {
        // mock do db
        const mockDb = {
            run: jest.fn((stmt, params, callback) => {
                callback.call({ changes: 1 }, null); // simula sucesso
            })
        };

        const userDAO = new UserDAO(mockDb);

        const result = await userDAO.addUser({ id: 1, name: 'João' });

        expect(mockDb.run).toHaveBeenCalled();
        expect(result).toEqual({ changes: 1 });
    });

    test('deve retornar usuário pelo ID', async () => {
        const mockDb = {
            get: jest.fn((stmt, params, callback) => {
                callback(null, { id: 1, name: 'João' });
            })
        };

        const userDAO = new UserDAO(mockDb);

        const result = await userDAO.getUserById(1);

        expect(mockDb.get).toHaveBeenCalled();
        expect(result).toEqual({ id: 1, name: 'João' });
    });

    test('deve lançar erro ao adicionar usuário nulo', () => {
        const mockDb = {};
        const userDAO = new UserDAO(mockDb);

        expect(() => userDAO.addUser(null))
            .toThrow('User must be provided');
    });

});
