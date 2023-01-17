import { React } from 'react';
import { Box, chakra, Progress, SimpleGrid, Text } from '@chakra-ui/react';
import { ChakraLayout } from './components/templates/ChakraLayout';

function SubTitle(props) {
  const { children } = props;
  return (
    <chakra.h2 textAlign={'left'} fontSize={'lg'} pt={10} pb={2} fontWeight={'bold'}>
      {children}
    </chakra.h2>
  );
}

function SkillBox(props) {
  const { children } = props;
  return (
    <Box w={'full'} boxShadow={'2xl'} rounded={'lg'} p={6} textAlign={'left'}>
      {children}
    </Box>
  );
}

function StatusBar(props) {
  const { title, value, exp } = props;
  let color = ""
  if (exp) {
    color = "red.500"
  }
  return (
    <Box>
      <chakra.h3 fontWeight={'medium'} fontSize={'md'} color={color}>{title}</chakra.h3>
      <Progress size='xs' value={value}/>
    </Box>
  );
}

export const TechStack = () => {
  return (
    <ChakraLayout>
      <chakra.h1 textAlign={'center'} fontSize={'3xl'} py={5} fontWeight={'bold'}>
        Skill Set
      </chakra.h1>
      <Text textAlign={'center'} fontWeight={600} color={'gray.400'} pb={2}>
        業務で一定期間以上、使用経験のある技術一覧です。
      </Text>
      <Text textAlign={'center'} fontWeight={600} color={'gray.400'} pb={2}>
        広く浅くですが、フロントからバックエンドまで、様々な開発に携わらせていただきました。
      </Text>
      <Text textAlign={'center'} fontWeight={600} color={'gray.400'} pb={2}>
        表示されているステータスバーは、経験年数を含めて考えた、個人的な技術習熟度です。
      </Text>
      <Text textAlign={'center'} fontWeight={600} color={'gray.400'} pb={2}>
        ラベルが赤くなっているものは、ある程度自由に手を動かせるレベルで習得した技術になります。
      </Text>
      <SubTitle>Front-end</SubTitle>
      <SkillBox>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
          <StatusBar title={'HTML / CSS'} value={100} exp={true}/>
          <StatusBar title={'JavaScript'} value={75} exp={true}/>
          <StatusBar title={'TypeScript'} value={50} exp={false}/>
          <StatusBar title={'Vue.js'} value={50} exp={false}/>
          <StatusBar title={'Nuxt.js'} value={50} exp={false}/>
          <StatusBar title={'JSP'} value={50} exp={false}/>
          <StatusBar title={'CShell'} value={25} exp={false}/>
        </SimpleGrid>
      </SkillBox>
      <SubTitle>Back-end</SubTitle>
      <SkillBox>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
          <StatusBar title={'Java'} value={100} exp={true}/>
          <StatusBar title={'JUnit'} value={25} exp={false}/>
          <StatusBar title={'Spring Boot'} value={50} exp={false}/>
          <StatusBar title={'Struts'} value={50} exp={false}/>
          <StatusBar title={'Node.js'} value={25} exp={false}/>
          <StatusBar title={'PEGA'} value={25} exp={false}/>
        </SimpleGrid>
      </SkillBox>
      <SubTitle>DB</SubTitle>
      <SkillBox>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
          <StatusBar title={'Oracle Database'} value={100} exp={true}/>
          <StatusBar title={'Microsoft SQL Server'} value={50} exp={false}/>
        </SimpleGrid>
      </SkillBox>
      <SubTitle>DevOps</SubTitle>
      <SkillBox>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
          <StatusBar title={'AWS WorkSpaces'} value={25} exp={false}/>
          <StatusBar title={'AWS EC2'} value={25} exp={false}/>
          <StatusBar title={'AWS S3'} value={50} exp={false}/>
          <StatusBar title={'AWS Lambda'} value={50} exp={false}/>
          <StatusBar title={'AWS CodeBuild'} value={25} exp={false}/>
          <StatusBar title={'AWS CodeCommit'} value={75} exp={true}/>
          <StatusBar title={'Git / GitHub'} value={75} exp={true}/>
          <StatusBar title={'SVN'} value={25} exp={false}/>
          <StatusBar title={'Vagrant'} value={25} exp={false}/>
          <StatusBar title={'Linux'} value={75} exp={true}/>
        </SimpleGrid>
      </SkillBox>
      <SubTitle>Communication Tools</SubTitle>
      <SkillBox>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
          <StatusBar title={'Slack'} value={100} exp={true}/>
          <StatusBar title={'Microsoft Teams'} value={100} exp={true}/>
          <StatusBar title={'Discord'} value={75} exp={true}/>
          <StatusBar title={'Matter Most'} value={25} exp={false}/>
          <StatusBar title={'Zoom'} value={50} exp={false}/>
        </SimpleGrid>
      </SkillBox>
      <SubTitle>IDE & Editor</SubTitle>
      <SkillBox>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
          <StatusBar title={'Eclipse / STS'} value={100} exp={true}/>
          <StatusBar title={'Visual Studio Code'} value={100} exp={true}/>
        </SimpleGrid>
      </SkillBox>
    </ChakraLayout>
  );
}