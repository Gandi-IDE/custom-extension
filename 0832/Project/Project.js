import { icon } from "./0832_Project.svg";

(function (Scratch) {
    Scratch.translate.setup({
        zh: {
            '0832_Project.0832_Project': '项目',
            '0832_Project.description': '在Gandi中读取项目信息',
            '0832_Project.TotalUsedBlocks': '使用的块总数',
            '0832_Project.NumberOfBlockTypes': '块种类数',
            '0832_Project.NumberOfSegments': '段数',
            '0832_Project.NumberOfCostumes': '造型数',
            '0832_Project.NumberOfSounds': '声音数'
        },
        en: {
            '0832_Project.0832_Project': 'Project',
            '0832_Project.description': 'Read Project infomation in Gandi',
            '0832_Project.TotalUsedBlocks': 'Total Used Blocks',
            '0832_Project.NumberOfBlockTypes': 'Number Of Block Types',
            '0832_Project.NumberOfSegments': 'Number Of Segments',
            '0832_Project.NumberOfCostumes': 'Number Of Costumes',
            '0832_Project.NumberOfSounds': 'Number Of Sounds'
        }
    });
    const extensionId = '0832_Project';
    class Project {
        constructor(runtime) {
            this.runtime = runtime;
            this.totalUsedBlocks = 0;
            this.numberOfBlockTypes = 0;
            this.numberOfSegments = 0;
            this.numberOfCostumes = 0;
            this.numberOfSounds = 0;
        }
        calculate() {
            const targets = this.runtime.targets;
            const blocksUsed = {}; // Record the number of block types
            let segmentCount = 0; // Record the number of segments
            let costumeCount = 0; // Record the number of costumes
            let soundCount = 0;   // Record the number of sounds

            for (let i = 0; i < targets.length; i++) {
                const target = targets[i];
                if (target.blocks) {
                    for (const blockId in target.blocks._blocks) {
                        const block = target.blocks._blocks[blockId];
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
                if (target.sprite.costumes) {
                    costumeCount += target.sprite.costumes.length;
                }

                // Count the number of sounds
                if (target.sprite.sounds) {
                    soundCount += target.sprite.sounds.length;
                }
            }

            this.totalUsedBlocks = targets.reduce((acc, target) => acc + Object.keys(target.blocks._blocks || {}).length, 0);
            this.numberOfBlockTypes = Object.keys(blocksUsed).length;
            this.numberOfSegments = segmentCount;
            this.numberOfCostumes = costumeCount;
            this.numberOfSounds = soundCount;
        }
        getInfo() {
            return {
                id: extensionId,
                name: Scratch.translate({ id: '0832_Project.0832_Project', default: 'Project' }),
                blocks: [
                    {
                        opcode: 'TotalUsedBlocks',
                        blockType: Scratch.BlockType.REPORTER,
                        disableMonitor: true,
                        text: Scratch.translate({ id: '0832_Project.TotalUsedBlocks', default: 'Total Used Blocks' })
                    },
                    {
                        opcode: 'NumberOfBlockTypes',
                        blockType: Scratch.BlockType.REPORTER,
                        disableMonitor: true,
                        text: Scratch.translate({ id: '0832_Project.NumberOfBlockTypes', default: 'Number of Block Types' })
                    },
                    {
                        opcode: 'NumberOfSegments',
                        blockType: Scratch.BlockType.REPORTER,
                        disableMonitor: true,
                        text: Scratch.translate({ id: '0832_Project.NumberOfSegments', default: 'Number of Segments' })
                    },
                    {
                        opcode: 'NumberOfCostumes',
                        blockType: Scratch.BlockType.REPORTER,
                        disableMonitor: true,
                        text: Scratch.translate({ id: '0832_Project.NumberOfCostumes', default: 'Number of Costumes' })
                    },
                    {
                        opcode: 'NumberOfSounds',
                        blockType: Scratch.BlockType.REPORTER,
                        disableMonitor: true,
                        text: Scratch.translate({ id: '0832_Project.NumberOfSounds', default: 'Number of Sounds' })
                    },
                ]
            };
        }
        TotalUsedBlocks() {
            this.calculate();
            return this.totalUsedBlocks;
        }

        NumberOfBlockTypes() {
            this.calculate();
            return this.numberOfBlockTypes;
        }

        NumberOfSegments() {
            this.calculate();
            return this.numberOfSegments;
        }

        NumberOfCostumes() {
            this.calculate();
            return this.numberOfCostumes;
        }

        NumberOfSounds() {
            this.calculate();
            return this.numberOfSounds;
        }
    }

    const extension = {
        Extension: Project,
        info: {
            name: `${extensionId}.0832_Project.0832_Project`,
            description: `${extensionId}.0832_Project.description`,
            extensionId,
            iconURL: icon,
            featured: true,
            disabled: false,
            collaboratorList: [
                {
                    collaborator: "0832",
                    collaboratorURL: "https://github.com/0832k12",
                },
            ],
        },
        l10n: {
            "zh-cn": {
                [`${extensionId}.0832_Project.0832_Project`]: "项目",
                [`${extensionId}.0832_Project.description`]: "在Gandi中读取项目信息",
            },
            en: {
                [`${extensionId}.0832_Project.0832_Project`]: "Project",
                [`${extensionId}.0832_Project.description`]: "Read Project infomation in Gandi",
            },
        },
    };
    window.tempExt = extension;
})(Scratch);
