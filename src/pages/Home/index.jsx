import { useState, useEffect, useRef } from 'react'
import { Container, Form, Title, Input, Button, ContainerLinks, Content, Link } from './styles';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import { toast } from 'react-toastify'
import api from "../../services/api"

function Home() {
    const [urls, setUrls] = useState(null)
    const [shortURL, setShortURL] = useState()

    const inputName = useRef();

    useEffect(() => {
        async function loadUrls() {
            const { data } = await api.get("/urls")
            setUrls(data)
        }
        loadUrls()
    }, [])

    async function updateClicks(data) {

        const newUrl = urls.map(url => {
            return url.longUrl === data.longUrl
                ? { ...url, clicks: url.clicks + 1 }
                : url
        })

        setUrls(newUrl)

        await api.put(`${data.slug}`,
            {
                clicks: data.clicks + 1
            })
    }

    async function handleShortenedUrl() {

        if (!inputName.current.value) {
            setShortURL(null)
            toast.warn('Por favor, informe uma URL !')
            return
        }

        let newUrls = []
        const existUrl = urls.filter(data => data.longUrl === inputName.current.value)

        if (existUrl.length) {

            updateClicks(existUrl[0])
            setShortURL(existUrl[0].shortenedUrl)
            toast.warn('URL já foi encurtada ! Verifique em sua lista.')
            inputName.current.value = ""
            return
        }

        const { data } = await api.post('new',
            {
                longUrl: inputName.current.value, clicks: 1
            })

        newUrls = [...urls, data]
        setUrls(newUrls)

        inputName.current.value = ""
        setShortURL(data.shortenedUrl)
        toast.success('URL encurtado e adicionado na sua lista de links!')
    }

    async function handleLink(data) {
        updateClicks(data)
        window.open(data.longUrl)
    }

    function copyToClipboard(url) {
        navigator.clipboard.writeText(url)
    }

    return (
        <Container>
            <Form>
                <Title>Encurtador de URL</Title>
                <Input type="text" placeholder="Cole sua URL aqui..." ref={inputName} />
                <Button type="button" onClick={handleShortenedUrl}>Encurtar</Button>

                {shortURL && (
                    <Link>
                        <span>URL Encurtado:</span>
                        <p>{shortURL}</p>
                        <ContentCopyIcon className='icon' onClick={() => copyToClipboard(shortURL)} />
                    </Link>
                )}
            </Form>

            <ContainerLinks>
                {urls?.length &&
                    urls.map((item) => (
                        <Content key={item.id}>
                            <Link>
                                <span>URL Encurtado:</span>
                                <p>{item.shortenedUrl}</p>
                                <ContentCopyIcon className='icon' onClick={() => copyToClipboard(item.shortenedUrl)} />
                            </Link>
                            <Link>
                                <span>URL Original:</span>
                                <p>{item.longUrl}</p>
                                <OpenInNewIcon className='icon' onClick={() => handleLink(item)} />
                            </Link>
                        </Content>

                    ))}
            </ContainerLinks>

        </Container>
    )
}

export default Home
