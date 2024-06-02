export default {
    "httpProxy-config": {
        "sd_cwxWLtLVnBARq3kJ": {
            "id": "sd_cwxWLtLVnBARq3kJ",
            "type": "httpProxy-config",
            "viewType": "server",
            "nodeType": "flow",
            "name": "",
            "url": process.env.HTTP_PROXY,
            "username": "",
            "usernameMappingObj": {
                "mapVarType": "str",
                "mapVarValue": ""
            },
            "users": [],
            "password": "",
            "passwordMappingObj": {
                "mapVarType": "str",
                "mapVarValue": ""
            },
            "useProxyAuth": false,
            "qparams": "",
            "qparamsMap": "",
            "noproxy": "",
            "category": "config",
            "__ssdTypeInputs__": {
                "url": {
                    "type": "process.env",
                    "value": "HTTP_PROXY",
                    "constant": false
                },
                "username": {
                    "type": "str",
                    "value": "",
                    "constant": false
                },
                "password": {
                    "type": "str",
                    "value": "",
                    "constant": false
                }
            },
            "__n_excludedFromValidation__": {}
        }
    },
    "amqp-config": {
        "sd_izLS69KhunqTRXVD": {
            "id": "sd_izLS69KhunqTRXVD",
            "type": "amqp-config",
            "viewType": "server",
            "nodeType": "flow",
            "name": "",
            "hostname": process.env.RMQ_HOST,
            "port": process.env.RMQ_PORT,
            "username": process.env.RMQ_USERNAME,
            "password": process.env.RMQ_PWD,
            "frameMax": 4096,
            "heartbeat": 0,
            "vhost": "/",
            "category": "config",
            "__ssdTypeInputs__": {
                "hostname": {
                    "type": "process.env",
                    "value": "RMQ_HOST",
                    "nullable": "true",
                    "nullableValue": "localhost",
                    "constant": false
                },
                "port": {
                    "type": "process.env",
                    "value": "RMQ_PORT",
                    "nullable": "true",
                    "nullableValue": "5672",
                    "constant": false
                },
                "username": {
                    "type": "process.env",
                    "value": "RMQ_USERNAME",
                    "constant": false
                },
                "password": {
                    "type": "process.env",
                    "value": "RMQ_PWD",
                    "constant": false
                },
                "frameMax": {
                    "type": "num",
                    "value": "4096",
                    "nullable": "true",
                    "nullableValue": "4096",
                    "constant": false
                },
                "heartbeat": {
                    "type": "num",
                    "value": "0",
                    "nullable": "true",
                    "nullableValue": "0",
                    "constant": false
                },
                "vhost": {
                    "type": "str",
                    "value": "/",
                    "nullable": "true",
                    "nullableValue": "/",
                    "constant": false
                }
            },
            "__n_excludedFromValidation__": {}
        }
    },
    "733b97c3-9469-a2c7-e9fa-45540ce4ce47": {
        "sd_wgH3KJYiLQehrm0F": {
            "id": "sd_wgH3KJYiLQehrm0F",
            "type": "733b97c3-9469-a2c7-e9fa-45540ce4ce47",
            "viewType": "common",
            "nodeType": "flow",
            "name": "",
            "hostname": process.env.RMQ_HOST,
            "port": process.env.RMQ_PORT,
            "username": process.env.RMQ_USERNAME,
            "password": process.env.RMQ_PWD,
            "frameMax": 4096,
            "heartbeat": 4096,
            "vHost": "/",
            "category": "config",
            "__ssdTypeInputs__": {
                "hostname": {
                    "type": "process.env",
                    "value": "RMQ_HOST",
                    "constant": false
                },
                "port": {
                    "type": "process.env",
                    "value": "RMQ_PORT",
                    "constant": false
                },
                "username": {
                    "type": "process.env",
                    "value": "RMQ_USERNAME",
                    "constant": false
                },
                "password": {
                    "type": "process.env",
                    "value": "RMQ_PWD",
                    "constant": false
                },
                "frameMax": {
                    "type": "num",
                    "value": "4096",
                    "constant": false
                },
                "heartbeat": {
                    "type": "num",
                    "value": "4096",
                    "constant": false
                },
                "vHost": {
                    "type": "str",
                    "value": "/",
                    "constant": false
                }
            },
            "__n_excludedFromValidation__": {}
        }
    },
    "6189ff69-47a2-54d4-9dbc-f0faf16be9db": {
        "sd_sAsRXqnjQQUtZ3FB": {
            "id": "sd_sAsRXqnjQQUtZ3FB",
            "type": "6189ff69-47a2-54d4-9dbc-f0faf16be9db",
            "viewType": "common",
            "nodeType": "flow",
            "name": "digital_redis",
            "disableDatabase": false,
            "enableSocket": false,
            "url": process.env.REDIS_URL,
            "host": "",
            "port": "",
            "path": "",
            "keepAlive": 0,
            "noDelay": false,
            "username": "",
            "password": "",
            "connectionName": "",
            "database": "",
            "family": "IPv4",
            "connectTimeout": 0,
            "reconnectStrategy": "",
            "tls": false,
            "commandsQueueMaxLength": 0,
            "disableOfflineQueue": false,
            "readonly": false,
            "legacyMode": false,
            "category": "config",
            "__ssdTypeInputs__": {
                "url": {
                    "type": "process.env",
                    "value": "REDIS_URL",
                    "nullable": "true",
                    "nullableValue": "",
                    "constant": false
                },
                "host": {
                    "type": "str",
                    "value": "",
                    "nullable": "true",
                    "nullableValue": "",
                    "constant": false
                },
                "port": {
                    "type": "str",
                    "value": "",
                    "nullable": "true",
                    "nullableValue": "",
                    "constant": false
                },
                "path": {
                    "type": "str",
                    "value": "",
                    "nullable": "true",
                    "nullableValue": "",
                    "constant": false
                },
                "keepAlive": {
                    "type": "num",
                    "value": "",
                    "constant": false
                },
                "username": {
                    "type": "str",
                    "value": "",
                    "nullable": "true",
                    "nullableValue": "",
                    "constant": false
                },
                "password": {
                    "type": "str",
                    "value": "",
                    "nullable": "true",
                    "nullableValue": "",
                    "constant": false
                },
                "connectionName": {
                    "type": "str",
                    "value": "",
                    "nullable": "true",
                    "nullableValue": "",
                    "constant": false
                },
                "database": {
                    "type": "str",
                    "value": "",
                    "nullable": "true",
                    "nullableValue": "",
                    "constant": false
                },
                "connectTimeout": {
                    "type": "num",
                    "value": "",
                    "constant": false
                },
                "reconnectStrategy": {
                    "type": "literal",
                    "value": "",
                    "nullable": "true",
                    "nullableValue": "",
                    "constant": false
                },
                "commandsQueueMaxLength": {
                    "type": "num",
                    "value": "",
                    "constant": false
                }
            },
            "__n_excludedFromValidation__": {
                "host": true,
                "port": true,
                "family": true,
                "path": true,
                "connectTimeout": true,
                "noDelay": true,
                "keepAlive": true,
                "tls": true,
                "reconnectStrategy": true
            }
        }
    },
    "ad-config": {
        "sd_dg9rd8Jd1qbTpeYM": {
            "id": "sd_dg9rd8Jd1qbTpeYM",
            "type": "ad-config",
            "viewType": "server",
            "nodeType": "flow",
            "name": "",
            "url": process.env.AD_HOST,
            "urlMappingObj": {
                "mapVarType": "process.env",
                "mapVarValue": "AD_HOST"
            },
            "baseDN": process.env.AD_BASE_DN,
            "baseDNMappingObj": {
                "mapVarType": "process.env",
                "mapVarValue": "AD_BASE_DN"
            },
            "usrpostfix": process.env.AD_USERNAME_POSTFIX,
            "usrpostfixMappingObj": {
                "mapVarType": "process.env",
                "mapVarValue": "AD_USERNAME_POSTFIX"
            },
            "usrprefix": process.env.AD_USERNAME_PREFIX,
            "usrprefixMappingObj": {
                "mapVarType": "process.env",
                "mapVarValue": "AD_USERNAME_PREFIX"
            },
            "username": process.env.AD_ADMIN_USER,
            "usernameMappingObj": {
                "mapVarType": "process.env",
                "mapVarValue": "AD_ADMIN_USER"
            },
            "password": process.env.AD_ADMIN_PASSWORD,
            "passwordMappingObj": {
                "mapVarType": "process.env",
                "mapVarValue": "AD_ADMIN_PASSWORD"
            },
            "category": "config",
            "__ssdTypeInputs__": {
                "url": {
                    "type": "process.env",
                    "value": "AD_HOST",
                    "constant": false
                },
                "baseDN": {
                    "type": "process.env",
                    "value": "AD_BASE_DN",
                    "constant": false
                },
                "usrpostfix": {
                    "type": "process.env",
                    "value": "AD_USERNAME_POSTFIX",
                    "nullable": "true",
                    "nullableValue": "",
                    "constant": false
                },
                "usrprefix": {
                    "type": "process.env",
                    "value": "AD_USERNAME_PREFIX",
                    "nullable": "true",
                    "nullableValue": "",
                    "constant": false
                },
                "username": {
                    "type": "process.env",
                    "value": "AD_ADMIN_USER",
                    "constant": false
                },
                "password": {
                    "type": "process.env",
                    "value": "AD_ADMIN_PASSWORD",
                    "constant": false
                }
            },
            "__n_excludedFromValidation__": {}
        }
    },
    "21f98839-76c2-6236-c554-248a0253589c": {
        "sd_ekgDbkG40EO4ilGo": {
            "id": "sd_ekgDbkG40EO4ilGo",
            "type": "21f98839-76c2-6236-c554-248a0253589c",
            "viewType": "common",
            "nodeType": "flow",
            "name": "",
            "clientName": "dcp",
            "host": process.env.SFTP_HOST,
            "port": "22",
            "forceIPv4": false,
            "forceIPv6": false,
            "username": process.env.SFTP_USER_NAME,
            "auth_type": "password",
            "password": process.env.SFTP_PASSWORD,
            "privateKey": "",
            "passphrase": "",
            "readyTimeout": 0,
            "enableDebug": false,
            "strictVendor": false,
            "retries": 0,
            "retry_factor": 0,
            "retry_minTimeout": 0,
            "category": "config",
            "__ssdTypeInputs__": {
                "clientName": {
                    "type": "str",
                    "value": "dcp",
                    "constant": false
                },
                "host": {
                    "type": "process.env",
                    "value": "SFTP_HOST",
                    "constant": false
                },
                "port": {
                    "type": "str",
                    "value": "22",
                    "constant": false
                },
                "username": {
                    "type": "process.env",
                    "value": "SFTP_USER_NAME",
                    "constant": false
                },
                "password": {
                    "type": "process.env",
                    "value": "SFTP_PASSWORD",
                    "constant": false
                },
                "privateKey": {
                    "type": "str",
                    "value": "",
                    "constant": false
                },
                "passphrase": {
                    "type": "str",
                    "value": "",
                    "constant": false
                },
                "readyTimeout": {
                    "type": "num",
                    "value": "",
                    "constant": false
                },
                "retries": {
                    "type": "num",
                    "value": "",
                    "constant": false
                },
                "retry_factor": {
                    "type": "num",
                    "value": "",
                    "constant": false
                },
                "retry_minTimeout": {
                    "type": "num",
                    "value": "",
                    "constant": false
                }
            },
            "__n_excludedFromValidation__": {
                "privateKey": true,
                "passphrase": true
            }
        }
    }
}