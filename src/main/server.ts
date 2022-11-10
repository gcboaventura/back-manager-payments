import { app, env } from './config'
import { connection, CreateTable } from '../infra/database'

connection.connect((error: any) => {
	if (!error) {
		new CreateTable(connection)
		app.listen(env.PORT, () => console.log(`server running at http://localhost:${env.PORT}`))
	}
})
