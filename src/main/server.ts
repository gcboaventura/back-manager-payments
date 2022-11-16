import 'module-alias/register'
import { app, env } from './config'
import { connection, CreateTable } from '@/infra'

connection.connect((error: any) => {
	if (!error) {
		new CreateTable(connection)
		app.listen(env.PORT, () => console.log(`server running at http://localhost:${env.PORT}`))
	}
})
