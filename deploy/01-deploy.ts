import { HardhatRuntimeEnvironment } from "hardhat/types"
import { DeployFunction } from "hardhat-deploy/types"

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  // code here

  const { deployer } = await hre.getNamedAccounts()
  const { deploy } = hre.deployments

  const currentTimestampInSeconds = Math.round(Date.now() / 1000)
  const unlockTime = BigInt(currentTimestampInSeconds + 60)

  await deploy("Lock", {
    from: deployer,
    args: [unlockTime],
    log: true,
  })
}
export default func
