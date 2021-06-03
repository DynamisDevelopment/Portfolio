import React from 'react'
import { Props } from '../../sections/portfolio/data'

// * Components 
import { useSpring, animated } from 'react-spring'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Stack,
    Flex,
    Box,
    Image,
    Button
} from "@chakra-ui/core"

// * Styles 
import './Project.sass'

const Project = (props: Props) => {
    // @ts-ignore
    const { isOpen, onOpen, onClose } = useDisclosure()

    // * Swivel Animation
    const calc = (x: number, y: number) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
    const trans = (x: number, y: number, s: number) => `perspective(3000px) rotateX(${x / 2}deg) rotateY(${y / 2}deg)`
    const [move, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))

    const btnStyles = {
        bg: 'purple.600',
        _hover: { bg: 'purple.700' }
    }

    return (
        <animated.div className='project'
            onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            // @ts-ignore
            style={{ transform: move.xys.interpolate(trans) }}>
            <div onClick={onOpen}>
                <animated.img className="thumnail" src={props.image} alt={props.name} />
            </div>
            {!props.complete && <p className='not-complete'>-- Work in Progress --</p>}

            <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
                <ModalOverlay />
                <ModalContent color='white' minH="500px">
                    <ModalHeader fontSize={'3xl'}> {props.name} </ModalHeader>
                    <ModalCloseButton color={'purple.500'} size={'lg'} />
                    <ModalBody fontSize={'1.25em'}> {props.desc} </ModalBody>

                    <ModalFooter className='more-links'>
                        <Flex w='100%' justify='space-between' align='flex-end'>
                            <Stack>
                                <Box> {props.designBy ? <p>Design By: {props.designBy}</p> : <p></p>} </Box>
                                <Box>{props.tech.join('/')}</Box>
                            </Stack>

                            <Stack>
                                {props.git && <Box><a href={props.git} target="_blank" rel="noopener">
                                    <Button {...btnStyles}> See Github
                                        <Image src='./assets/icons/github-logo.svg' rounded='full' size='20px' ml='10px' />
                                    </Button>
                                </a></Box>}
                                {props.link && <Box><a href={props.link} target="_blank" rel="noopener">
                                    <Button {...btnStyles}>Visit Project →</Button>
                                </a></Box>}
                            </Stack>
                        </Flex>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </animated.div>

    )
}


export default Project
