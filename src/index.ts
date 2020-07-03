import path from 'path'
import { AwsVpc, compile } from 'tstf'

const example1Vpc = new AwsVpc({
    cidrBlock: "10.0.0.0/16",
    enableDnsHostnames: true,
    enableDnsSupport: true,
    name: "example1",
    tags: {
        name: "example1"
    }
})

const example2Vpc = new AwsVpc({
    cidrBlock: "10.1.0.0/16",
    enableDnsHostnames: true,
    enableDnsSupport: true,
    name: "example2",
    tags: {
        name: "example2"
    }
})

const outputPath = path.join(path.resolve(), '.tstf')
compile(outputPath, example1Vpc, example2Vpc)
