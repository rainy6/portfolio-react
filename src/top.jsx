import { React } from 'react';
import { FaTwitter, FaGithub } from 'react-icons/fa' ;
import { ChakraLayout } from "./components/templates/ChakraLayout"
import { Heading, Avatar, Box, Center, Text, Stack, Link, Badge } from '@chakra-ui/react';

export const Top = () => {
  return (
    <ChakraLayout>
      <Heading>Profile</Heading>
      <Center pt={6}>
        <Box w={'full'} boxShadow={'2xl'} rounded={'lg'} p={6} textAlign={'center'}>
          <Avatar size={'2xl'} m={4} pos={'relative'}
          src={"https://avatars.githubusercontent.com/u/116582524?s=400&u=94e11c02de7e7875cc2a23f00b39537150977e01&v=4"}
          />
          <Heading fontSize={'4xl'} fontFamily={'body'}>
            Ryosei
          </Heading>
          <Text fontWeight={600} color={'gray.500'} mb={4}>
            Github: @rainy6
          </Text>
          <Text
          textAlign={'center'}
          px={3} pb={5}>
            東京でフロント＆バックエンドエンジニアとして働いています。
            <br/>学生時代からCSに興味を持ち、低レイヤー技術からWeb開発まで幅広く勉強しています。
            <br/>当サイトには私の自己紹介から、個人制作作品まで掲載しています。
          </Text>
          <Stack direction='row' alignItems={"center"} justifyContent={'center'} mb={3}>
            <Text color={'cyan.500'}>好きな技術：</Text>
            <Badge colorScheme='orange'>Rust</Badge>
            <Badge colorScheme='blue'>TypeScript</Badge>
            <Badge colorScheme='purple'>AWS Lambda</Badge>
          </Stack>
          <Stack direction='row' alignItems={"center"} justifyContent={'center'} mb={6}>
            <Text color={'cyan.500'}>Contact / SNS：</Text>
            {/* <Link href={'https://github.com/rainy6'}><Badge colorScheme='Black'>GitHub</Badge></Link>
            <Badge colorScheme='blue'>TypeScript</Badge>
            <Badge colorScheme='purple'>AWS Lambda</Badge> */}
            <Link href={'https://twitter.com/137abst'}><FaTwitter /></Link>
            <Link href={'https://github.com/rainy6'}><FaGithub /></Link>
          </Stack>
        </Box>
      </Center>
      <Box boxShadow={'2xl'} rounded={'lg'} p={20} m={10}>

        <Text textAlign={'left'} fontSize={'lg'} fontWeight={'bold'}>資格：</Text>
        <Text textAlign={'right'}>情報セキュリティマネジメント試験 合格</Text>
        <Text textAlign={'right'}>応用情報技術者試験 合格</Text>
        <Text textAlign={'left'} fontSize={'lg'} fontWeight={'bold'} pt={5}>最終学歴:</Text>
        <Text textAlign={'right'}>東京電子情報工学課程 高度情報システム科(4年制) 卒業</Text>
        <Text textAlign={'left'} fontSize={'lg'} fontWeight={'bold'} pt={5}>主な業務経験:</Text>
        <br/>
        <Text textAlign={'left'}>・基幹システムの新規ページ作成、およびDB連携とDB修正(フロントエンド/バックエンド)</Text>
        <Text textAlign={'left'}>・新規機能についてお客様への提案などの要件定義プロセス</Text>
        <Text textAlign={'left'}>・SPAサイトの新規機能開発（フロントエンド/バックエンド）</Text>
        <Text textAlign={'left'}>・モダンJavaScriptフレームワークでのアジャイル開発</Text>
      </Box>
    </ChakraLayout>
  )
}