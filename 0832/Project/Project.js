(function (Scratch) {
    'use strict';
    const vm = Scratch.vm;
    Scratch.translate.setup({
        zh: {
            'Project': '项目',
            'GetCurrentProject': '获取当前项目',
            'GetInformationInside': '获取内含信息',
            'InsideInformation': '内含信息',
            'GetSprite': '获取[Sprite]',
            'TotalUsedBlocks': '使用的块总数',
            'NumberOfBlockTypes': '块种类数',
            'NumberOfSegments': '段数',
            'NumberOfCostumes': '造型数',
            'NumberOfSounds': '声音数',
            'Onlyoneperproject': '一个项目中只能有一个'
        }
    });
    
    function calculate() {
        const information = vm.toJSON();
        const jsonData = JSON.parse(information);
        const blocksUsed = {}; // Record the number of block types
        let segmentCount = 0; // Record the number of segments
        let costumeCount = 0; // Record the number of costumes
        let soundCount = 0;   // Record the number of sounds

        for (let i = 0; i < jsonData.targets.length; i++) {
            const target = jsonData.targets[i];
            if (target.blocks) {
                for (const blockId in target.blocks) {
                    const block = target.blocks[blockId];
                    const blockType = block.opcode.split('_')[0]; // Get the block type

                    if (!blocksUsed[blockType]) {
                        blocksUsed[blockType] = 1;
                    } else {
                        blocksUsed[blockType]++;
                    }

                    // Count the number of segments
                    if (block.topLevel && block.parent === null) {
                        segmentCount++;
                    }
                }
            }

            // Count the number of costumes
            if (target.costumes) {
                costumeCount += target.costumes.length;
            }

            // Count the number of sounds
            if (target.sounds) {
                soundCount += target.sounds.length;
            }
        }

        totalUsedBlocks = jsonData.targets.reduce((acc, target) => acc + Object.keys(target.blocks || {}).length, 0);
        numberOfBlockTypes = Object.keys(blocksUsed).length;
        numberOfSegments = segmentCount;
        numberOfCostumes = costumeCount;
        numberOfSounds = soundCount;
    }

    function parseSprite(spriteName) {
        const information = vm.toJSON();
        const jsonData = JSON.parse(information);
        let targetSprite = null;

        for (const target of jsonData.targets) {
            if (target.name === spriteName) {
                targetSprite = target;
                break;
            }
        }

        return targetSprite;
    }

    let totalUsedBlocks, numberOfBlockTypes, numberOfSegments, numberOfCostumes, numberOfSounds;
    class Project {
        getInfo() {
            return {
                id: 'Project',
                name: Scratch.translate({ id: 'Project', default: 'Project' }),
                blocks: [
                    {
                        opcode: 'GetCurrentProject',
                        blockType: Scratch.BlockType.REPORTER,
                        text: Scratch.translate({ id: 'GetCurrentProject', default: 'Get Current Project' })
                    },
                    {
                        opcode: 'GetSprite',
                        blockType: Scratch.BlockType.REPORTER,
                        text: Scratch.translate({ id: 'GetSprite', default: 'Get [Sprite]' }),
                        arguments: {
                            Sprite: {
                                type: Scratch.ArgumentType.STRING,
                                menu: "SpriteList"
                            }
                        }
                    },
                    '---',
                    {
                        opcode: 'TotalUsedBlocks',
                        blockType: Scratch.BlockType.REPORTER,
                        text: Scratch.translate({ id: 'TotalUsedBlocks', default: 'Total Used Blocks' })
                    },
                    {
                        opcode: 'NumberOfBlockTypes',
                        blockType: Scratch.BlockType.REPORTER,
                        text: Scratch.translate({ id: 'NumberOfBlockTypes', default: 'Number of Block Types' })
                    },
                    {
                        opcode: 'NumberOfSegments',
                        blockType: Scratch.BlockType.REPORTER,
                        text: Scratch.translate({ id: 'NumberOfSegments', default: 'Number of Segments' })
                    },
                    {
                        opcode: 'NumberOfCostumes',
                        blockType: Scratch.BlockType.REPORTER,
                        text: Scratch.translate({ id: 'NumberOfCostumes', default: 'Number of Costumes' })
                    },
                    {
                        opcode: 'NumberOfSounds',
                        blockType: Scratch.BlockType.REPORTER,
                        text: Scratch.translate({ id: 'NumberOfSounds', default: 'Number of Sounds' })
                    },
                ],
                menus: {
                    SpriteList: {
                        acceptReporters: true,
                        items: "_GetSpriteList"
                    },
                    VariableList: {
                        acceptReporters: true,
                        items: "_GetVariableList"
                    },
                }
            };
        }
        _GetSpriteList() {
            const sprites = [];
            for (const target of vm.runtime.targets) {
                if (target.isOriginal && !target.isStage) {
                    sprites.push(target.getName());
                }
            }
            if (sprites.length === 0) {
                return [
                    {
                        text: "No sprites found.",
                        value: " ",
                    },
                ];
            }
            return sprites;
        }
        _GetVariableList() {
            const vars = vm.runtime.getAllVarNamesOfType('')
            return vars.length == 0 ? [" "] : vars
        }
        GetCurrentProject() {
            return vm.toJSON();
        }

        GetSprite({ Sprite }) {
            return JSON.stringify(parseSprite(Sprite));
        }

        TotalUsedBlocks() {
            calculate();
            return totalUsedBlocks;
        }

        NumberOfBlockTypes() {
            calculate();
            return numberOfBlockTypes;
        }

        NumberOfSegments() {
            calculate();
            return numberOfSegments;
        }

        NumberOfCostumes() {
            calculate();
            return numberOfCostumes;
        }

        NumberOfSounds() {
            calculate();
            return numberOfSounds;
        }
    }

    Scratch.extensions.register(new Project());
})(Scratch);
