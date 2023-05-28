import { useDisclosure } from '@mantine/hooks';
import { Dialog, Text, ScrollArea, Button, TextInput, Group, Stack, Popover, useMantineTheme } from '@mantine/core';
import { Messages, Robot, User, X } from 'tabler-icons-react';
import { useEffect, useRef, useState } from "react";
import fetchBotReply from './OpenAI';

enum SenderType {
    USER = 'You',
    BOT = 'Chatbot',
}

type MessageType = {
    sender: SenderType;
    message: string;
    timestamp: string;
}

export default function ChatBot() {
    const [opened, { toggle, close }] = useDisclosure(true);
    const [popoverOpened, { toggle: _, close: poClose }] = useDisclosure(true);
    const [messageHistory, setMessageHistory] = useState<MessageType[]>([{
        sender: SenderType.BOT,
        message: "Hi there! I'm an AI powered chatbot that can answer any questions you have about Matt. Ask me anything!",
        timestamp: new Date().toLocaleString()
    }]);
    const [currentInput, setCurrentInput] = useState("");
    const scrollAreaRef = useRef(null);
    const [loadingMsg, setLoadingMsg] = useState(false);

    useEffect(() => {
        const history = localStorage.getItem("messageHistory");
        if (history) {
            setMessageHistory(JSON.parse(history));
        }
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            poClose();
        }, 5000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (scrollAreaRef.current) {
            scrollAreaRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }
    }, [messageHistory]);

    const sendMessage = async () => {
        if (currentInput === "") {
            return;
        }
        setLoadingMsg(true)
        var newMessage: MessageType = {
            sender: SenderType.USER,
            message: currentInput,
            timestamp: new Date().toLocaleString()
        }
        const updatedHistory = saveMessage(newMessage);
        await botReply(updatedHistory);
        setLoadingMsg(false)
        setCurrentInput("");
    }

    const botReply = async (updatedHistory: MessageType[]) => {
        const reply = await fetchBotReply(updatedHistory)
        if (reply) {
            var newMessage: MessageType = {
                sender: SenderType.BOT,
                message: reply,
                timestamp: new Date().toLocaleString()
            }

            saveMessage(newMessage, updatedHistory);
        }
    }
    const saveMessage = (newMessage: MessageType, history = messageHistory) => {
        const updatedHistory = [...history, newMessage];
        setMessageHistory(updatedHistory);
        localStorage.setItem("messageHistory", JSON.stringify(updatedHistory));
        return updatedHistory;
    }

    return (
        <>
            <Popover width="target" position="bottom" withArrow shadow="xl" opened={popoverOpened}>
                <Popover.Target>
                    <Dialog opened={opened} onClose={close} size="xl" radius={50} p="nil" style={{ width: "90px", height: "90px" }}>
                        <Button variant="light"
                            size="lg"
                            radius={50}
                            p="nil"
                            style={{ width: "100%", height: "100%", paddingLeft: "0px", paddingRight: "0px", border: "1px" }}
                            onClick={() => {
                                toggle();
                                poClose();
                            }}>
                            <Messages size={50} />
                        </Button>
                    </Dialog>
                </Popover.Target>
                <Popover.Dropdown p="xs" sx={{ pointerEvents: 'none' }}>
                    <Stack align="center" p="nil">
                        <Text ta="center" size="sm">Try Me!</Text>
                    </Stack>
                </Popover.Dropdown>
            </Popover>
            <Dialog opened={!opened} onClose={toggle} size="xl" radius="lg" p="xs">
                <Stack p="nil">
                    <Group
                        style={{ justifyContent: "space-between" }}
                    >
                        <Text m="xs">Chatbot Messages</Text>
                        <Button variant="compact"
                            onClick={toggle}
                        ><X /></Button>
                    </Group>
                    <ScrollArea.Autosize ref={scrollAreaRef} mah={400}>
                        <Stack>
                            {messageHistory.map((message: MessageType, index: number) => <Message key={index} {...message} />)}
                        </Stack>
                    </ScrollArea.Autosize>
                    <Group position='center'>
                        <TextInput
                            value={currentInput}
                            onChange={(event) => setCurrentInput(event.currentTarget.value)}
                            placeholder="Type your message here..."
                            style={{ width: "70%" }}
                        />
                        {loadingMsg ? (
                            <Button variant="light" onClick={sendMessage} loading loaderPosition='center'>
                                Send
                            </Button>
                        ) : (
                            <Button variant="light" onClick={sendMessage}>
                                Send
                            </Button>
                        )}
                    </Group>
                </Stack>
            </Dialog>
        </>
    );
}

const Message = ({ sender, message, timestamp }: MessageType) => {
    const theme = useMantineTheme();
    const isUser = sender === SenderType.USER;

    if (isUser) {
        return (
            <Group position="right" p="xs">
                <Stack align="flex-end" p="nil" maw={300} style={{ gap: "0" }}>
                    <Group position="right" p="md" style={{
                        backgroundColor: theme.colorScheme === "dark" ? theme.colors.blue[9] : theme.colors.blue[6],
                        borderRadius: "25px",
                        width: "fit-content"
                    }}>
                        <Text color="white">
                            {message}
                        </Text>
                    </Group>
                    <Group position='right'>
                        <Text color={theme.colorScheme === "dark" ? theme.colors.gray[4] : theme.colors.gray[6]}
                            size="xs"
                            p="nil">
                            {timestamp}
                        </Text>
                    </Group>
                </Stack >

                <Stack p="nil" style={{ gap: "0" }}>
                    <User size={24}
                        color={theme.colorScheme === "dark" ? theme.colors.blue[6] : theme.colors.blue[6]}
                    />
                    <Text size="xs"
                        ta="center"
                        color={theme.colorScheme === "dark" ? theme.colors.blue[6] : theme.colors.blue[6]}
                    >You</Text>
                </Stack>
            </Group >
        )
    } else {
        return (
            <Group position="left" p="xs">
                <Stack p="nil" style={{ gap: "0" }}>
                    <Robot size={24} />
                    <Text size="xs" ta="center">Bot</Text>
                </Stack>
                <Stack align="flex-start" p="nil" maw={300} style={{ gap: "0" }}>
                    <Group position="right" p="md" style={{
                        backgroundColor: theme.colorScheme === "dark" ? theme.colors.gray[7] : theme.colors.gray[5],
                        borderRadius: "25px",
                        width: "fit-content"
                    }}>
                        <Text color="white">
                            {message}
                        </Text>
                    </Group>
                    <Group position='right'>
                        <Text color={theme.colorScheme === "dark" ? theme.colors.gray[4] : theme.colors.gray[6]}
                            size="xs"
                            p="nil">
                            {timestamp}
                        </Text>
                    </Group>
                </Stack>

            </Group>
        )
    }

}
