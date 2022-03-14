import config from "./configs/config.js"
import server from "./server/server.js"
import {logger} from "./util/logs.js"

server.listen(config.port)
.on('listening', () => logger.info(`Server Running at port ${config.port}`))