# Monitoramento Avançado com pfSense e MikroTik

A segurança da informação tornou-se um pilar crítico nas administrações públicas e privadas. A auditoria de logs não é apenas uma prática recomendada, mas uma necessidade sob regulamentações modernas de proteção de dados, como a LGPD (Lei Geral de Proteção de Dados).

## Por que Auditar Logs?

Os servidores, firewalls (como o **pfSense**) e roteadores (**MikroTik**) geram milhares de eventos por segundo. Sem uma análise automatizada e centralizada de logs:
1. Ataques de força bruta e varreduras de portas (port scans) podem passar desapercebidos.
2. É impossível realizar uma análise forense precisa pós-incidente.
3. Violações de acesso a dados pessoais sensíveis não serão rastreadas.

## Configuração do Servidor Syslog

Para centralizar logs no pfSense, acesse **Status > System Logs > Settings**, marque a opção **Enable Remote Logging** e aponte para o IP do seu servidor de auditoria (como uma stack ELK ou um servidor syslog-ng).

Abaixo está um exemplo de script em **Shell Script** para automatizar o reporte diário de conexões bloqueadas no firewall:

```bash
#!/bin/bash
# Reporte diário de conexões bloqueadas
LOG_FILE="/var/log/pf.log"
EMAIL="andrefragata14@gmail.com"

echo "=== IPs com maior incidência de bloqueio ===" > /tmp/report.txt
tcpdump -n -e -r "$LOG_FILE" action block | awk '{print $9}' | cut -d. -f1-4 | sort | uniq -c | sort -nr | head -n 15 >> /tmp/report.txt

mail -s "Relatório de Segurança - pfSense" "$EMAIL" < /tmp/report.txt
```

## Benefícios da Auditoria

* **Conformidade Legal**: Atende integralmente aos requisitos de rastreabilidade de eventos exigidos pela LGPD.
* **Proatividade**: Identifica comportamentos anômalos na rede antes que resultem em uma invasão ou vazamento de dados.
* **Agilidade no Suporte**: Facilita a resolução de problemas de conectividade ao identificar rapidamente filtros ativos de tráfego.
