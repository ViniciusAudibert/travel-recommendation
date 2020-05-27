import React from 'react'
import axios from 'axios'

import { Planejamentos } from '../src/components/Planejamentos'

const planejamentos = [
  {
    _id: '123213-asdas',
    nome: 'Porto Alegre',
    lugares: [
        {"_id":{"$oid":"5e9bb7c6b3aa59324826fb9b"},"nome":"hotZone","descricao":"É um parque.","endereco":"Av. Diário de Notícias, 300 - Loja 1023 - Cristal, Porto Alegre - RS, 90810-080, Brasil","googlePlaceId":"ChIJA7yPOaF4GZURlf7MRbswTtM","googleUrl":"https://maps.google.com/?cid=15226160971074305685","images":["CmRaAAAACprDe183Y-_Pvy5l1-kLOeIP7PDWLNn71aVLu2dC3l4TZoIMZ5ir-yUVxa1B41zwfjnist9eAOtDRxL8WprjyxN0l-wZ2DhDOLtDZFbr1ppNW6KyOHllFVI3Kf_olZCjEhDMSJIOXug9BE0clffrT89pGhSwKWu2Q2Raef5-cxdm2m0RLUqxwA","CmRaAAAAc53FJELb1vCfRuvsX4Arvrlqn0Ir2JeD4I62SvY580PWjc0ah5zu5YFOhOJ_fJowT0038LW0ng2-8KBYsSEr620-D6X_ZSIXbdfY20BDbpuStutqahaS5K-wnk6aI60REhDxIz8pDU7ESnR6YbRMGHNaGhTFC--unCH8midS39nD6RSfAcE1xQ","CmRaAAAA6e5BehMqpx4g7ume3qGhPiH7hAbfoCo2ZSR_Il6f3Wadj_rjsXzwNNmUd3Ekm-RpS0dyDsV-cA7Oav7vxBuVWEQGh-H4JyC1cVXjKhnpkgyvT1021vZTtmZ5r4jHzYyIEhDrkzrU-59zUtdLKlzx3DBNGhQAgT9KsJr7e3y2gs40qpXAjxNIrA","CmRaAAAAeoEqianNk_SSLxsibTyAyaEP8L8GxU-nkYKlU5ff3sol7BNKCISVZGgjogzTpNLGJubh5yzQDOKvwioVlwJJPH8RhEKX_uqOz-deA_FBgIJnfCuZ7Uq_n5rXN8MC_-egEhAYYVWfYykI3dyghNMqQTU9GhQZ0Cayvl7ScHcr1sDHcAreEGtrVA","CmRaAAAAiORie-Mc97qQAKv8IXXzy8GbKkaL6UymPTuTxOrV7wiRAZcls9saStxvJxSNqe5TCjZP85fkCbY6uJYp2nksIuzc3P7fz61qf80ogPG3aOteWBIs11OOzN0Im_ZAQoBoEhDeACqAjJ9Ar16Ps2KTwlJTGhSpE5A9pN7AcFxk232MadFMRRqETA","CmRaAAAAuI2fLv2fI4RTgWmJQIE1FmGsjyxIVznik2Egd1hqUxbNOazKkVxr-Ii0ce0F4ycKeB9wjG_fx_ht3m1MtdajQlgXmU2CwtE5n_MMBBRjyupaqXGNEKOFyhv11EAYwGz1EhBNtSlR9xM5en-20xsp8NWwGhS4kc31FjmIj0XOf87Vfakz9OciwQ","CmRaAAAAwk8nwTab_OomjA7H6ir9cJO2acOZEFhm6cChqleCDVa9ZEuOhlA1MKDVUjnNc2A-bl2tI50JKDuiY7n5CP8OKAtve71c6ToJpsN1LUXwsXPietzfG8ZZGR4PYHCkmnbIEhAPfulGxmxKw8C6fyRRnqIGGhQ6ZmBkVuy6RtE5e-6rEajOrITmJA","CmRaAAAAyWp4_iSWqRS1dsKa93oUjx7L-LLZFqI3B1pI3Sjv5WB-m44W7bQq5WV5bFLS1vEJ-SuXIpgm1Xn_HKO3wFtCbUdrZxXYJ3-S6JNSROtaUd29tGPqbJoWawX9Ip3qrEsWEhBG9nvbbLyut2KT6dmIn_t5GhRUopOjNlufmVxVOzVunuo483ePZQ","CmRaAAAA84ETwviskocyN9-HTfvAEWecBBYfqmV60KqQxnq4tTV-HEthNtBwmXz42fDDRPBDz1DMP3O4ugWj6wa_8-xRQC0o0k4qJaXOZ5zNrg_32A185VRE4x42DyDesrQgFnYhEhCiX8-_2I5Rz02OtM4UdeFnGhQv1xpuZIuYW51C8Ipl_Sv6IjPWrg","CmRaAAAAHLOhdEDtmGALL8S8_Oq8NOeC4F9cst3vSR2ISjWJm7UpmAXvY5dPvGT2Q4Iniv5wDNJTApgo6U7lknJWYUT6pN1zFc1zgtkhDb3_E3Ckal-kYLJ0ogqTqwe3bddiAhP-EhDaPfpZxjFV9_75GymkxQx9GhTwfmTppchCfAt8z3X1CdidBBjBQQ"],"reviews":[{"mensagem":"As máquinas são bacanas, mas bem caro pra jogar e andar nos brinquedos","estrelas":"3","descricaoDataReview":"um mês atrás"},{"mensagem":"Acho que por algum motivo pararam de investir no Hotzone. A última vez em que estivemos lá, o simulador de montanha russa (que é o mesmo há oito anos) teve uma pane no meio da sessão. Nós retiraram de lá e ofereceram uma rodada grátis em outro brinquedo..\n\nDe resto, é um ótimo lugar pra passar uma tarde divertida, sem dúvida alguma!","estrelas":"3","descricaoDataReview":"5 meses atrás"},{"mensagem":"Lugar muito, agora com ótimas promoções e ser vip apenas por 60 reias, vip desconta 25% do valor dos brinquedos, diversão garantida!","estrelas":"5","descricaoDataReview":"um mês atrás"},{"mensagem":"Já foi o melhor de POA, agora só tem jogo de carro e a maioria fica em manutenção, ainda tem o preço mtooo caro, compra uma bola e vai joga na rua que vale mais","estrelas":"3","descricaoDataReview":"um mês atrás"},{"mensagem":"A ficha para cada brinquedo é R$6,00, vale a pena em alguns e quase nao tem filas.","estrelas":"4","descricaoDataReview":"um mês atrás"}],"tags":["amusement_park","park","point_of_interest","establishment"],"localizacao":{"lat":-30.0847943,"lng":-51.245315},"cidadeId":{"$oid":"5e9bb7c1b3aa59324826fb97"}},
        {"_id":{"$oid":"5e9bb7c6b3aa59324826fb9d"},"nome":"Oikotie - Parques Temáticos","descricao":"É um parque.","endereco":"R. Dezessete, 29 - Cristal, Porto Alegre - RS, 90810-468, Brasil","googlePlaceId":"ChIJNyzCgFWDGZUR4ZYOEeKNrM4","googleUrl":"https://maps.google.com/?cid=14892434069895681761","images":["CmRaAAAAzD5FJCBANyhrde1njACMoiAHgH__waRPmkAsU9aT16zHgTmDaz_VaEWT4ZyObaYRLiOz8r_6Ma7VP3GryiYBwjF3TQkeTGBCF62oLSeEmqJNEiUcRgVQwNjxyscfFlKMEhDTLG3Dk_PavlQ5XiEJ0WfgGhTzzCFhrJgDv-pzHtO4N7Ll1E4s5A"],"reviews":[{"mensagem":"Inciveu","estrelas":"5","descricaoDataReview":"um mês atrás"}],"tags":["amusement_park","park","point_of_interest","establishment"],"localizacao":{"lat":-30.0878353,"lng":-51.24662749999999},"cidadeId":{"$oid":"5e9bb7c1b3aa59324826fb97"}},
        {"_id":{"$oid":"5e9bb7c6b3aa59324826fb9f"},"nome":"Casa da Gravura","descricao":"É uma galeria de artes, expõem diversas obras em um espaço arquitetônico que adequa o posicionamento, iluminação e possibilidade de distanciamento e circulação do espectador.","endereco":"Rua General João Telles, 542 - Bom Fim, Porto Alegre - RS, 90035-120, Brasil","googlePlaceId":"ChIJmYOBeFZ4GZUR3KJzi5pKg1o","googleUrl":"https://maps.google.com/?cid=6522138712987640540","images":["CmRaAAAAJJ7Yf5TmpdVJ2MFqv2fyg2X6RlylTDodkXtIs8MnV3EQch-P3LxbVcmy2EEAt8SOXFwk9UgTzbZAfm7D6svniVXv4T79m1M1z8dNkM1hpSCwdMiSmodCng-aD7m-ICfYEhCSfRUBQ8HeErWjLnbfJv0rGhRPiacKTLByQ2CY72sqGddyaL_9zQ"],"reviews":[],"tags":["art_gallery","point_of_interest","establishment"],"localizacao":{"lat":-30.0343311,"lng":-51.2125482},"cidadeId":{"$oid":"5e9bb7c1b3aa59324826fb97"}},
    ],
  },
  {
    _id: '123213-asda3',
    nome: 'Gramado',
    lugares: [
        {"_id":{"$oid":"5e9bb7c6b3aa59324826fb9b"},"nome":"hotZone","descricao":"É um parque.","endereco":"Av. Diário de Notícias, 300 - Loja 1023 - Cristal, Porto Alegre - RS, 90810-080, Brasil","googlePlaceId":"ChIJA7yPOaF4GZURlf7MRbswTtM","googleUrl":"https://maps.google.com/?cid=15226160971074305685","images":["CmRaAAAACprDe183Y-_Pvy5l1-kLOeIP7PDWLNn71aVLu2dC3l4TZoIMZ5ir-yUVxa1B41zwfjnist9eAOtDRxL8WprjyxN0l-wZ2DhDOLtDZFbr1ppNW6KyOHllFVI3Kf_olZCjEhDMSJIOXug9BE0clffrT89pGhSwKWu2Q2Raef5-cxdm2m0RLUqxwA","CmRaAAAAc53FJELb1vCfRuvsX4Arvrlqn0Ir2JeD4I62SvY580PWjc0ah5zu5YFOhOJ_fJowT0038LW0ng2-8KBYsSEr620-D6X_ZSIXbdfY20BDbpuStutqahaS5K-wnk6aI60REhDxIz8pDU7ESnR6YbRMGHNaGhTFC--unCH8midS39nD6RSfAcE1xQ","CmRaAAAA6e5BehMqpx4g7ume3qGhPiH7hAbfoCo2ZSR_Il6f3Wadj_rjsXzwNNmUd3Ekm-RpS0dyDsV-cA7Oav7vxBuVWEQGh-H4JyC1cVXjKhnpkgyvT1021vZTtmZ5r4jHzYyIEhDrkzrU-59zUtdLKlzx3DBNGhQAgT9KsJr7e3y2gs40qpXAjxNIrA","CmRaAAAAeoEqianNk_SSLxsibTyAyaEP8L8GxU-nkYKlU5ff3sol7BNKCISVZGgjogzTpNLGJubh5yzQDOKvwioVlwJJPH8RhEKX_uqOz-deA_FBgIJnfCuZ7Uq_n5rXN8MC_-egEhAYYVWfYykI3dyghNMqQTU9GhQZ0Cayvl7ScHcr1sDHcAreEGtrVA","CmRaAAAAiORie-Mc97qQAKv8IXXzy8GbKkaL6UymPTuTxOrV7wiRAZcls9saStxvJxSNqe5TCjZP85fkCbY6uJYp2nksIuzc3P7fz61qf80ogPG3aOteWBIs11OOzN0Im_ZAQoBoEhDeACqAjJ9Ar16Ps2KTwlJTGhSpE5A9pN7AcFxk232MadFMRRqETA","CmRaAAAAuI2fLv2fI4RTgWmJQIE1FmGsjyxIVznik2Egd1hqUxbNOazKkVxr-Ii0ce0F4ycKeB9wjG_fx_ht3m1MtdajQlgXmU2CwtE5n_MMBBRjyupaqXGNEKOFyhv11EAYwGz1EhBNtSlR9xM5en-20xsp8NWwGhS4kc31FjmIj0XOf87Vfakz9OciwQ","CmRaAAAAwk8nwTab_OomjA7H6ir9cJO2acOZEFhm6cChqleCDVa9ZEuOhlA1MKDVUjnNc2A-bl2tI50JKDuiY7n5CP8OKAtve71c6ToJpsN1LUXwsXPietzfG8ZZGR4PYHCkmnbIEhAPfulGxmxKw8C6fyRRnqIGGhQ6ZmBkVuy6RtE5e-6rEajOrITmJA","CmRaAAAAyWp4_iSWqRS1dsKa93oUjx7L-LLZFqI3B1pI3Sjv5WB-m44W7bQq5WV5bFLS1vEJ-SuXIpgm1Xn_HKO3wFtCbUdrZxXYJ3-S6JNSROtaUd29tGPqbJoWawX9Ip3qrEsWEhBG9nvbbLyut2KT6dmIn_t5GhRUopOjNlufmVxVOzVunuo483ePZQ","CmRaAAAA84ETwviskocyN9-HTfvAEWecBBYfqmV60KqQxnq4tTV-HEthNtBwmXz42fDDRPBDz1DMP3O4ugWj6wa_8-xRQC0o0k4qJaXOZ5zNrg_32A185VRE4x42DyDesrQgFnYhEhCiX8-_2I5Rz02OtM4UdeFnGhQv1xpuZIuYW51C8Ipl_Sv6IjPWrg","CmRaAAAAHLOhdEDtmGALL8S8_Oq8NOeC4F9cst3vSR2ISjWJm7UpmAXvY5dPvGT2Q4Iniv5wDNJTApgo6U7lknJWYUT6pN1zFc1zgtkhDb3_E3Ckal-kYLJ0ogqTqwe3bddiAhP-EhDaPfpZxjFV9_75GymkxQx9GhTwfmTppchCfAt8z3X1CdidBBjBQQ"],"reviews":[{"mensagem":"As máquinas são bacanas, mas bem caro pra jogar e andar nos brinquedos","estrelas":"3","descricaoDataReview":"um mês atrás"},{"mensagem":"Acho que por algum motivo pararam de investir no Hotzone. A última vez em que estivemos lá, o simulador de montanha russa (que é o mesmo há oito anos) teve uma pane no meio da sessão. Nós retiraram de lá e ofereceram uma rodada grátis em outro brinquedo..\n\nDe resto, é um ótimo lugar pra passar uma tarde divertida, sem dúvida alguma!","estrelas":"3","descricaoDataReview":"5 meses atrás"},{"mensagem":"Lugar muito, agora com ótimas promoções e ser vip apenas por 60 reias, vip desconta 25% do valor dos brinquedos, diversão garantida!","estrelas":"5","descricaoDataReview":"um mês atrás"},{"mensagem":"Já foi o melhor de POA, agora só tem jogo de carro e a maioria fica em manutenção, ainda tem o preço mtooo caro, compra uma bola e vai joga na rua que vale mais","estrelas":"3","descricaoDataReview":"um mês atrás"},{"mensagem":"A ficha para cada brinquedo é R$6,00, vale a pena em alguns e quase nao tem filas.","estrelas":"4","descricaoDataReview":"um mês atrás"}],"tags":["amusement_park","park","point_of_interest","establishment"],"localizacao":{"lat":-30.0847943,"lng":-51.245315},"cidadeId":{"$oid":"5e9bb7c1b3aa59324826fb97"}},
        {"_id":{"$oid":"5e9bb7c6b3aa59324826fb9d"},"nome":"Oikotie - Parques Temáticos","descricao":"É um parque.","endereco":"R. Dezessete, 29 - Cristal, Porto Alegre - RS, 90810-468, Brasil","googlePlaceId":"ChIJNyzCgFWDGZUR4ZYOEeKNrM4","googleUrl":"https://maps.google.com/?cid=14892434069895681761","images":["CmRaAAAAzD5FJCBANyhrde1njACMoiAHgH__waRPmkAsU9aT16zHgTmDaz_VaEWT4ZyObaYRLiOz8r_6Ma7VP3GryiYBwjF3TQkeTGBCF62oLSeEmqJNEiUcRgVQwNjxyscfFlKMEhDTLG3Dk_PavlQ5XiEJ0WfgGhTzzCFhrJgDv-pzHtO4N7Ll1E4s5A"],"reviews":[{"mensagem":"Inciveu","estrelas":"5","descricaoDataReview":"um mês atrás"}],"tags":["amusement_park","park","point_of_interest","establishment"],"localizacao":{"lat":-30.0878353,"lng":-51.24662749999999},"cidadeId":{"$oid":"5e9bb7c1b3aa59324826fb97"}},
        {"_id":{"$oid":"5e9bb7c6b3aa59324826fb9f"},"nome":"Casa da Gravura","descricao":"É uma galeria de artes, expõem diversas obras em um espaço arquitetônico que adequa o posicionamento, iluminação e possibilidade de distanciamento e circulação do espectador.","endereco":"Rua General João Telles, 542 - Bom Fim, Porto Alegre - RS, 90035-120, Brasil","googlePlaceId":"ChIJmYOBeFZ4GZUR3KJzi5pKg1o","googleUrl":"https://maps.google.com/?cid=6522138712987640540","images":["CmRaAAAAJJ7Yf5TmpdVJ2MFqv2fyg2X6RlylTDodkXtIs8MnV3EQch-P3LxbVcmy2EEAt8SOXFwk9UgTzbZAfm7D6svniVXv4T79m1M1z8dNkM1hpSCwdMiSmodCng-aD7m-ICfYEhCSfRUBQ8HeErWjLnbfJv0rGhRPiacKTLByQ2CY72sqGddyaL_9zQ"],"reviews":[],"tags":["art_gallery","point_of_interest","establishment"],"localizacao":{"lat":-30.0343311,"lng":-51.2125482},"cidadeId":{"$oid":"5e9bb7c1b3aa59324826fb97"}},
        {"_id":{"$oid":"5e9bb7c6b3aa59324826fb9f"},"nome":"Casa da Gravura","descricao":"É uma galeria de artes, expõem diversas obras em um espaço arquitetônico que adequa o posicionamento, iluminação e possibilidade de distanciamento e circulação do espectador.","endereco":"Rua General João Telles, 542 - Bom Fim, Porto Alegre - RS, 90035-120, Brasil","googlePlaceId":"ChIJmYOBeFZ4GZUR3KJzi5pKg1o","googleUrl":"https://maps.google.com/?cid=6522138712987640540","images":["CmRaAAAAJJ7Yf5TmpdVJ2MFqv2fyg2X6RlylTDodkXtIs8MnV3EQch-P3LxbVcmy2EEAt8SOXFwk9UgTzbZAfm7D6svniVXv4T79m1M1z8dNkM1hpSCwdMiSmodCng-aD7m-ICfYEhCSfRUBQ8HeErWjLnbfJv0rGhRPiacKTLByQ2CY72sqGddyaL_9zQ"],"reviews":[],"tags":["art_gallery","point_of_interest","establishment"],"localizacao":{"lat":-30.0343311,"lng":-51.2125482},"cidadeId":{"$oid":"5e9bb7c1b3aa59324826fb97"}},
        {"_id":{"$oid":"5e9bb7c6b3aa59324826fb9f"},"nome":"Casa da Gravura","descricao":"É uma galeria de artes, expõem diversas obras em um espaço arquitetônico que adequa o posicionamento, iluminação e possibilidade de distanciamento e circulação do espectador.","endereco":"Rua General João Telles, 542 - Bom Fim, Porto Alegre - RS, 90035-120, Brasil","googlePlaceId":"ChIJmYOBeFZ4GZUR3KJzi5pKg1o","googleUrl":"https://maps.google.com/?cid=6522138712987640540","images":["CmRaAAAAJJ7Yf5TmpdVJ2MFqv2fyg2X6RlylTDodkXtIs8MnV3EQch-P3LxbVcmy2EEAt8SOXFwk9UgTzbZAfm7D6svniVXv4T79m1M1z8dNkM1hpSCwdMiSmodCng-aD7m-ICfYEhCSfRUBQ8HeErWjLnbfJv0rGhRPiacKTLByQ2CY72sqGddyaL_9zQ"],"reviews":[],"tags":["art_gallery","point_of_interest","establishment"],"localizacao":{"lat":-30.0343311,"lng":-51.2125482},"cidadeId":{"$oid":"5e9bb7c1b3aa59324826fb97"}},
        {"_id":{"$oid":"5e9bb7c6b3aa59324826fb9f"},"nome":"Casa da Gravura","descricao":"É uma galeria de artes, expõem diversas obras em um espaço arquitetônico que adequa o posicionamento, iluminação e possibilidade de distanciamento e circulação do espectador.","endereco":"Rua General João Telles, 542 - Bom Fim, Porto Alegre - RS, 90035-120, Brasil","googlePlaceId":"ChIJmYOBeFZ4GZUR3KJzi5pKg1o","googleUrl":"https://maps.google.com/?cid=6522138712987640540","images":["CmRaAAAAJJ7Yf5TmpdVJ2MFqv2fyg2X6RlylTDodkXtIs8MnV3EQch-P3LxbVcmy2EEAt8SOXFwk9UgTzbZAfm7D6svniVXv4T79m1M1z8dNkM1hpSCwdMiSmodCng-aD7m-ICfYEhCSfRUBQ8HeErWjLnbfJv0rGhRPiacKTLByQ2CY72sqGddyaL_9zQ"],"reviews":[],"tags":["art_gallery","point_of_interest","establishment"],"localizacao":{"lat":-30.0343311,"lng":-51.2125482},"cidadeId":{"$oid":"5e9bb7c1b3aa59324826fb97"}},
        {"_id":{"$oid":"5e9bb7c6b3aa59324826fb9f"},"nome":"Casa da Gravura","descricao":"É uma galeria de artes, expõem diversas obras em um espaço arquitetônico que adequa o posicionamento, iluminação e possibilidade de distanciamento e circulação do espectador.","endereco":"Rua General João Telles, 542 - Bom Fim, Porto Alegre - RS, 90035-120, Brasil","googlePlaceId":"ChIJmYOBeFZ4GZUR3KJzi5pKg1o","googleUrl":"https://maps.google.com/?cid=6522138712987640540","images":["CmRaAAAAJJ7Yf5TmpdVJ2MFqv2fyg2X6RlylTDodkXtIs8MnV3EQch-P3LxbVcmy2EEAt8SOXFwk9UgTzbZAfm7D6svniVXv4T79m1M1z8dNkM1hpSCwdMiSmodCng-aD7m-ICfYEhCSfRUBQ8HeErWjLnbfJv0rGhRPiacKTLByQ2CY72sqGddyaL_9zQ"],"reviews":[],"tags":["art_gallery","point_of_interest","establishment"],"localizacao":{"lat":-30.0343311,"lng":-51.2125482},"cidadeId":{"$oid":"5e9bb7c1b3aa59324826fb97"}},
    ],
  },
  {
    _id: '123213-555f',
    nome: 'Carlos Barbosa',
    lugares: [
        {"_id":{"$oid":"5e9bb7c6b3aa59324826fb9b"},"nome":"hotZone","descricao":"É um parque.","endereco":"Av. Diário de Notícias, 300 - Loja 1023 - Cristal, Porto Alegre - RS, 90810-080, Brasil","googlePlaceId":"ChIJA7yPOaF4GZURlf7MRbswTtM","googleUrl":"https://maps.google.com/?cid=15226160971074305685","images":["CmRaAAAACprDe183Y-_Pvy5l1-kLOeIP7PDWLNn71aVLu2dC3l4TZoIMZ5ir-yUVxa1B41zwfjnist9eAOtDRxL8WprjyxN0l-wZ2DhDOLtDZFbr1ppNW6KyOHllFVI3Kf_olZCjEhDMSJIOXug9BE0clffrT89pGhSwKWu2Q2Raef5-cxdm2m0RLUqxwA","CmRaAAAAc53FJELb1vCfRuvsX4Arvrlqn0Ir2JeD4I62SvY580PWjc0ah5zu5YFOhOJ_fJowT0038LW0ng2-8KBYsSEr620-D6X_ZSIXbdfY20BDbpuStutqahaS5K-wnk6aI60REhDxIz8pDU7ESnR6YbRMGHNaGhTFC--unCH8midS39nD6RSfAcE1xQ","CmRaAAAA6e5BehMqpx4g7ume3qGhPiH7hAbfoCo2ZSR_Il6f3Wadj_rjsXzwNNmUd3Ekm-RpS0dyDsV-cA7Oav7vxBuVWEQGh-H4JyC1cVXjKhnpkgyvT1021vZTtmZ5r4jHzYyIEhDrkzrU-59zUtdLKlzx3DBNGhQAgT9KsJr7e3y2gs40qpXAjxNIrA","CmRaAAAAeoEqianNk_SSLxsibTyAyaEP8L8GxU-nkYKlU5ff3sol7BNKCISVZGgjogzTpNLGJubh5yzQDOKvwioVlwJJPH8RhEKX_uqOz-deA_FBgIJnfCuZ7Uq_n5rXN8MC_-egEhAYYVWfYykI3dyghNMqQTU9GhQZ0Cayvl7ScHcr1sDHcAreEGtrVA","CmRaAAAAiORie-Mc97qQAKv8IXXzy8GbKkaL6UymPTuTxOrV7wiRAZcls9saStxvJxSNqe5TCjZP85fkCbY6uJYp2nksIuzc3P7fz61qf80ogPG3aOteWBIs11OOzN0Im_ZAQoBoEhDeACqAjJ9Ar16Ps2KTwlJTGhSpE5A9pN7AcFxk232MadFMRRqETA","CmRaAAAAuI2fLv2fI4RTgWmJQIE1FmGsjyxIVznik2Egd1hqUxbNOazKkVxr-Ii0ce0F4ycKeB9wjG_fx_ht3m1MtdajQlgXmU2CwtE5n_MMBBRjyupaqXGNEKOFyhv11EAYwGz1EhBNtSlR9xM5en-20xsp8NWwGhS4kc31FjmIj0XOf87Vfakz9OciwQ","CmRaAAAAwk8nwTab_OomjA7H6ir9cJO2acOZEFhm6cChqleCDVa9ZEuOhlA1MKDVUjnNc2A-bl2tI50JKDuiY7n5CP8OKAtve71c6ToJpsN1LUXwsXPietzfG8ZZGR4PYHCkmnbIEhAPfulGxmxKw8C6fyRRnqIGGhQ6ZmBkVuy6RtE5e-6rEajOrITmJA","CmRaAAAAyWp4_iSWqRS1dsKa93oUjx7L-LLZFqI3B1pI3Sjv5WB-m44W7bQq5WV5bFLS1vEJ-SuXIpgm1Xn_HKO3wFtCbUdrZxXYJ3-S6JNSROtaUd29tGPqbJoWawX9Ip3qrEsWEhBG9nvbbLyut2KT6dmIn_t5GhRUopOjNlufmVxVOzVunuo483ePZQ","CmRaAAAA84ETwviskocyN9-HTfvAEWecBBYfqmV60KqQxnq4tTV-HEthNtBwmXz42fDDRPBDz1DMP3O4ugWj6wa_8-xRQC0o0k4qJaXOZ5zNrg_32A185VRE4x42DyDesrQgFnYhEhCiX8-_2I5Rz02OtM4UdeFnGhQv1xpuZIuYW51C8Ipl_Sv6IjPWrg","CmRaAAAAHLOhdEDtmGALL8S8_Oq8NOeC4F9cst3vSR2ISjWJm7UpmAXvY5dPvGT2Q4Iniv5wDNJTApgo6U7lknJWYUT6pN1zFc1zgtkhDb3_E3Ckal-kYLJ0ogqTqwe3bddiAhP-EhDaPfpZxjFV9_75GymkxQx9GhTwfmTppchCfAt8z3X1CdidBBjBQQ"],"reviews":[{"mensagem":"As máquinas são bacanas, mas bem caro pra jogar e andar nos brinquedos","estrelas":"3","descricaoDataReview":"um mês atrás"},{"mensagem":"Acho que por algum motivo pararam de investir no Hotzone. A última vez em que estivemos lá, o simulador de montanha russa (que é o mesmo há oito anos) teve uma pane no meio da sessão. Nós retiraram de lá e ofereceram uma rodada grátis em outro brinquedo..\n\nDe resto, é um ótimo lugar pra passar uma tarde divertida, sem dúvida alguma!","estrelas":"3","descricaoDataReview":"5 meses atrás"},{"mensagem":"Lugar muito, agora com ótimas promoções e ser vip apenas por 60 reias, vip desconta 25% do valor dos brinquedos, diversão garantida!","estrelas":"5","descricaoDataReview":"um mês atrás"},{"mensagem":"Já foi o melhor de POA, agora só tem jogo de carro e a maioria fica em manutenção, ainda tem o preço mtooo caro, compra uma bola e vai joga na rua que vale mais","estrelas":"3","descricaoDataReview":"um mês atrás"},{"mensagem":"A ficha para cada brinquedo é R$6,00, vale a pena em alguns e quase nao tem filas.","estrelas":"4","descricaoDataReview":"um mês atrás"}],"tags":["amusement_park","park","point_of_interest","establishment"],"localizacao":{"lat":-30.0847943,"lng":-51.245315},"cidadeId":{"$oid":"5e9bb7c1b3aa59324826fb97"}},
        {"_id":{"$oid":"5e9bb7c6b3aa59324826fb9f"},"nome":"Casa da Gravura","descricao":"É uma galeria de artes, expõem diversas obras em um espaço arquitetônico que adequa o posicionamento, iluminação e possibilidade de distanciamento e circulação do espectador.","endereco":"Rua General João Telles, 542 - Bom Fim, Porto Alegre - RS, 90035-120, Brasil","googlePlaceId":"ChIJmYOBeFZ4GZUR3KJzi5pKg1o","googleUrl":"https://maps.google.com/?cid=6522138712987640540","images":["CmRaAAAAJJ7Yf5TmpdVJ2MFqv2fyg2X6RlylTDodkXtIs8MnV3EQch-P3LxbVcmy2EEAt8SOXFwk9UgTzbZAfm7D6svniVXv4T79m1M1z8dNkM1hpSCwdMiSmodCng-aD7m-ICfYEhCSfRUBQ8HeErWjLnbfJv0rGhRPiacKTLByQ2CY72sqGddyaL_9zQ"],"reviews":[],"tags":["art_gallery","point_of_interest","establishment"],"localizacao":{"lat":-30.0343311,"lng":-51.2125482},"cidadeId":{"$oid":"5e9bb7c1b3aa59324826fb97"}},
    ],
  },
]

const PlanejamentoPage = ({ planejamentos }) => {
  return (
      <Planejamentos planejamentos={planejamentos} />
  )
}

PlanejamentoPage.getInitialProps = async () => {
  //   const { data } = await axios.get('/api/planejamentos')

  return { planejamentos: planejamentos }
}

export default PlanejamentoPage
