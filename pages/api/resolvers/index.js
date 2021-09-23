import axios from 'axios'

export const resolvers = {
    Query: {
        getUsers: async () => {
            // eslint-disable-next-line no-useless-catch
            try {
                const users = await axios.get('https://api.github.com/users')
                return users.data.map(({ id, login, avatarUrl }) => ({
                    id,
                    login,
                    avatarUrl,
                }))
            } catch (error) {
                throw error
            }
        },
        getUser: async (_, args) => {
            // eslint-disable-next-line no-useless-catch
            try {
                const user = await axios.get(
                    `https://api.github.com/users/${args.name}`
                )
                return {
                    id: user.data.id,
                    login: user.data.login,
                    avatar_url: user.data.avatar_url,
                }
            } catch (error) {
                throw error
            }
        },
    },
}
