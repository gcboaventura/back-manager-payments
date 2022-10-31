import { app, env } from './config'
import { connection } from '../infra/database'

connection.connect((error: any) => {
	if (!error) {
		app.listen(env.PORT, () => console.log(`server running at http://localhost:${env.PORT}`))
	}
})
