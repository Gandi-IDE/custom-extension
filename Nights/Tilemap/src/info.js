import { SHOW_MODE, POSITION, MODE } from "./constant"
import translation_map from "./lang"

export default (Scratch, mode) => {

    const t = (s) => {
        return Scratch.translate({ id: s, default: s }) ?? s
    }
    Scratch.translate.setup(translation_map)
    const info = {
        id: 'nightstilemap',
        name: t('nights.tilemap.name'),
        blocks: [
            {
                blockType: Scratch.BlockType.LABEL,
                text: t('nights.tilemap.basic')
            },
            {
                opcode: 'show',
                blockType: Scratch.BlockType.COMMAND,
                text: t('nights.tilemap.show'),
                arguments: {
                    SHOW_MODE: {
                        type: Scratch.ArgumentType.STRING,
                        menu: 'SHOW_MODE'
                    }
                }
            },
            {
                opcode: 'setTileSize',
                text: t('nights.tilemap.setTileSize'),
                blockType: Scratch.BlockType.COMMAND,
                arguments: {
                    W: {
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: 0,
                    },
                    H: {
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: 0,
                    },
                }
            },
            {
                opcode: 'setMapSize',
                text: t('nights.tilemap.setMapSize'),
                blockType: Scratch.BlockType.COMMAND,
                arguments: {
                    W: {
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: 0,
                    },
                    H: {
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: 0,
                    },
                }
            },
            {
                opcode: 'setTileView',
                text: t('nights.tilemap.setTileView'),
                blockType: Scratch.BlockType.COMMAND,
                arguments: {
                    X: {
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: 0,
                    },
                    Y: {
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: 0,
                    },
                }
            },
            {
                blockType: Scratch.BlockType.LABEL,
                text: t('nights.tilemap.tileset')
            },
            {
                opcode: 'createTileSet',
                text: t('nights.tilemap.createTileSet'),
                blockType: Scratch.BlockType.COMMAND,
                arguments: {
                    TEXTURE: {
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: 0,
                    },
                    X: {
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: 0,
                    },
                    Y: {
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: 0,
                    },
                    W: {
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: 0,
                    },
                    H: {
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: 0,
                    },
                    OX: {
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: 0,
                    },
                    OY: {
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: 0,
                    },
                    TILE_ID: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: "草坪",
                    }
                }
            },
            {
                opcode: 'deleteTileSet',
                text: t('nights.tilemap.deleteTileSet'),
                blockType: Scratch.BlockType.COMMAND,
                arguments: {
                    TILE_ID: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: "草坪",
                    },
                }
            },
            {
                opcode: 'deleteAllTileSet',
                text: t('nights.tilemap.deleteAllTileSet'),
                blockType: Scratch.BlockType.COMMAND,
            },
            {
                opcode: 'getAllTileSet',
                text: t('nights.tilemap.getAllTileSet'),
                blockType: Scratch.BlockType.REPORTER,
            },
            {
                blockType: Scratch.BlockType.LABEL,
                text: t('nights.tilemap.tile')
            },
            {
                opcode: 'getTile',
                text: t('nights.tilemap.getTile'),
                blockType: Scratch.BlockType.REPORTER,
                arguments: {
                    X: {
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: 0,
                    },
                    Y: {
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: 0,
                    },
                    LAYER: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: "default_layer",
                    }
                }
            },
            {
                opcode: 'setTile',
                text: t('nights.tilemap.setTile'),
                blockType: Scratch.BlockType.COMMAND,
                arguments: {
                    X: {
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: 0,
                    },
                    Y: {
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: 0,
                    },
                    TILE_ID: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: "草坪",
                    },
                    LAYER: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: "default_layer",
                    }
                }
            },
            {
                opcode: 'clearTile',
                text: t('nights.tilemap.clearTile'),
                blockType: Scratch.BlockType.COMMAND,
                arguments: {
                    X: {
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: 0,
                    },
                    Y: {
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: 0,
                    },
                    TILE_ID: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: "草坪",
                    },
                    LAYER: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: "default_layer",
                    }
                }
            },
            {
                opcode: 'clearAllTile',
                text: t('nights.tilemap.clearAllTile'),
                blockType: Scratch.BlockType.COMMAND,
                arguments: {
                    LAYER: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: "default_layer",
                    }
                }
            },
            {
                blockType: Scratch.BlockType.LABEL,
                text: t('nights.tilemap.tileLayer')
            },
            {
                opcode: 'createTileLayer',
                text: t('nights.tilemap.createTileLayer'),
                blockType: Scratch.BlockType.COMMAND,
                arguments: {
                    LAYER_NAME: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: "建筑物"
                    }
                }
            },
            {
                opcode: 'deleteTileLayer',
                text: t('nights.tilemap.deleteTileLayer'),
                blockType: Scratch.BlockType.COMMAND,
                arguments: {
                    LAYER_NAME: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: "建筑物"
                    }
                }
            },
            {
                opcode: 'getTileLayers',
                text: t('nights.tilemap.getTileLayers'),
                blockType: Scratch.BlockType.REPORTER,
            },
            {
                blockType: Scratch.BlockType.LABEL,
                text: t('nights.tilemap.layer')
            },
            {
                opcode: 'joinTileMap',
                text: t('nights.tilemap.joinTileMap'),
                blockType: Scratch.BlockType.COMMAND,
                arguments: {
                    TILEMAP: {
                        type: Scratch.ArgumentType.STRING,
                        menu: "SPRITE_MENU_WITH_ALL"
                    }
                }
            },
            {
                opcode: 'setLayerInTileMap',
                text: t('nights.tilemap.setLayerInTileMap'),
                blockType: Scratch.BlockType.COMMAND,
                arguments: {
                    LAYER: {
                        type: Scratch.ArgumentType.NUMBER,
                        menu: 0
                    },
                    ROW: {
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: 0
                    }

                }
            },
            {
                opcode: 'quitTilemap',
                text: t('nights.tilemap.quitTilemap'),
                blockType: Scratch.BlockType.COMMAND,
            },
            {
                blockType: Scratch.BlockType.LABEL,
                text: t('nights.tilemap.position'),
            },
            {
                opcode: 'tileToPos',
                text: t('nights.tilemap.tileToPos'),
                blockType: Scratch.BlockType.REPORTER,
                arguments: {
                    X: {
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: 0,
                    },
                    Y: {
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: 0,
                    },
                    POSITION: {
                        type: Scratch.ArgumentType.STRING,
                        menu: 'POSITION'
                    }
                }
            },
            {
                opcode: 'posToTile',
                text: t('nights.tilemap.posToTile'),
                blockType: Scratch.BlockType.REPORTER,
                arguments: {
                    X: {
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: 0,
                    },
                    Y: {
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: 0,
                    },
                    POSITION_TILEMAP: {
                        type: Scratch.ArgumentType.STRING,
                        menu: 'POSITION_TILEMAP'
                    }
                }
            },
        ],
        menus: {
            SHOW_MODE: {
                items: [
                    {
                        value: SHOW_MODE.TILEMAP,
                        text: t('nights.tilemap.showTilemap'),
                    },
                    {
                        value: SHOW_MODE.SPRITE,
                        text: t('nights.tilemap.hideTilemap'),
                    },
                ]
            },
            POSITION: {
                items: [
                    {
                        value: POSITION.X,
                        text: t('x'),
                    },
                    {
                        value: POSITION.Y,
                        text: t('y'),
                    },
                ]
            },
            POSITION_TILEMAP: {
                items: [
                    {
                        value: POSITION.X,
                        text: t('列'),
                    },
                    {
                        value: POSITION.Y,
                        text: t('行'),
                    },
                ]
            },
            SPRITE_MENU_WITH_ALL: {
                acceptReporters: false,
                items: 'drawablesMenu',
            },
        },
        translation_map: translation_map
    }


    return info
}