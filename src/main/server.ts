import { app, env } from './config'

app.listen(env.PORT, () => console.log(`server running at http://localhost:${env.PORT}`))
