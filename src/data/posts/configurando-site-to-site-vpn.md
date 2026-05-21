<!-- Date: 2026-04-15 -->
# Configurando VPN Site-to-Site com IPsec e pfSense

Conectar filiais de forma segura é um dos desafios mais comuns enfrentados por administradores de rede. A VPN Site-to-Site utilizando o protocolo IPsec é o padrão de ouro para essa tarefa.

## Arquitetura do Cenário

Imagine duas unidades corporativas que precisam se comunicar de forma transparente:
- **Matriz (Unidade A):** Rede interna `192.168.10.0/24`
- **Filial (Unidade B):** Rede interna `192.168.20.0/24`

O tráfego de dados sensíveis entre as subredes deve ser criptografado ao transitar pela internet pública.

## Configuração da Fase 1 (P1) no pfSense

Na Fase 1, os dois firewalls estabelecem uma conexão segura para autenticação mútua. A configuração recomendada inclui:
- **Key Exchange version:** IKEv2
- **Encryption Algorithm:** AES 256-GCM
- **Hash Algorithm:** SHA256
- **DH Group:** 14 (2048 bit)

```
Configuração no pfSense:
VPN > IPsec > Tunnels > Add P1
- Interface: WAN
- Remote Gateway: [IP Público do outro lado]
- Pre-Shared Key: [Senha compartilhada ultra forte]
```

## Configuração da Fase 2 (P2)

Na Fase 2, definimos exatamente quais subredes locais e remotas podem trocar pacotes pela VPN criptografada:
- **Local Network:** LAN subnet (`192.168.10.0/24`)
- **Remote Network:** Network (`192.168.20.0/24`)
- **Protocol:** ESP

## Regras de Firewall

Por fim, não se esqueça de adicionar uma regra em **Firewall > Rules > IPsec** em ambos os lados permitindo o tráfego que chega da outra ponta:
```
Action: Pass
Interface: IPsec
Address Family: IPv4
Protocol: Any
Source: Any
Destination: Any
```

## Verificação e Status

Monitore o status do túnel IPsec em **Status > IPsec**. Se tudo estiver configurado corretamente, o status exibirá "Established" e você conseguirá pingar os dispositivos da outra ponta diretamente de sua LAN.
