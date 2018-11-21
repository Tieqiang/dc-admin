import sysRouters from './sys-routers'
import testRouters from "./test-routers"

let routers=[]

sysRouters.forEach((item)=>{
  routers.push(item)
})

testRouters.forEach(item=>{
  routers.push(item)
})

export default routers
