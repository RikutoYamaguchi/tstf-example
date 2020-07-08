import path from 'path'
import {compile, resource, data} from 'tstf'

const example1Vpc = resource('aws_vpc', 'example1', {
  cidrBlock: '10.0.0.0/16',
  enableDnsHostnames: true,
  enableDnsSupport: true,
  tags: {
    Name: 'example1'
  }
})

const exampleIamPolicyDocument = data('aws_iam_policy_document', 'assume_role', {
  statement: {
    actions: ['sts:AssumeRole'],
    principals: {
      identifiers: ['example'],
      type: 'Service',
    },
  },
})

const outputPath = path.join(path.resolve(), '.tstf')
compile(outputPath, example1Vpc, exampleIamPolicyDocument)
