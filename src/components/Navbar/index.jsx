import {
  Box,
  Flex,
  HStack,
  Link,
  Image,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  Icon,
} from "@chakra-ui/react"
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons"
import { SiFacebook, SiTiktok, SiYoutube } from "react-icons/si"
import { SocialMediaLinks } from "@/data/socialMedia.js"
import { navLinks } from "@/data/Navbar.js"
import styles from "@/styles/Navbar.module.css"

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
      color: "black",
    }}
    href={"#"}
  >
    {children}
  </Link>
)

export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Box className={styles.container} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            bg={"black"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Image src="./logo.png" width={20} alt="Logo" />
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {navLinks.map(link => {
                console.dir(link)
                return(
                <NavLink key={link.text}>{link.text}</NavLink>
              )})}
            </HStack>
          </HStack>
          <Flex alignItems={"center"} justifyContent={"center"}>
            <Link href={SocialMediaLinks.tiktok}>
              <Button variant={"solid"} colorScheme={"red"} size={"sm"} mr={4}>
                <Icon as={SiTiktok} />
              </Button>
            </Link>
            <Link href={SocialMediaLinks.youtube}>
              <Button variant={"solid"} colorScheme={"red"} size={"sm"} mr={4}>
                <Icon as={SiYoutube} />
              </Button>
            </Link>
            <Link href={SocialMediaLinks.facebook}>
              <Button variant={"solid"} colorScheme={"red"} size={"sm"} mr={4}>
                <Icon as={SiFacebook} />
              </Button>
            </Link>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {navLinks.map(link => (
                <NavLink key={link.text}>{link.text}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  )
}
