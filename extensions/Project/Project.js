import { icon } from "./Project.svg";

(function (Scratch) {
    Scratch.translate.setup({
        zh: {
            'Project0832.Project0832': '项目',
            'Project0832.description': '在Gandi中读取项目信息',
            'Project0832.TotalUsedBlocks': '使用的块总数',
            'Project0832.NumberOfBlockTypes': '块种类数',
            'Project0832.NumberOfSegments': '段数',
            'Project0832.NumberOfCostumes': '造型数',
            'Project0832.NumberOfSounds': '声音数'
        },
        en: {
            'Project0832.Project0832': 'Project',
            'Project0832.description': 'Read Project infomation in Gandi',
            'Project0832.TotalUsedBlocks': 'Total Used Blocks',
            'Project0832.NumberOfBlockTypes': 'Number Of Block Types',
            'Project0832.NumberOfSegments': 'Number Of Segments',
            'Project0832.NumberOfCostumes': 'Number Of Costumes',
            'Project0832.NumberOfSounds': 'Number Of Sounds'
        }
    });
    const extensionId = 'Project0832';
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
                name: Scratch.translate({ id: 'Project0832.Project0832', default: 'Project' }),
                blocks: [
                    {
                        opcode: 'TotalUsedBlocks',
                        blockType: Scratch.BlockType.REPORTER,
                        disableMonitor: true,
                        text: Scratch.translate({ id: 'Project0832.TotalUsedBlocks', default: 'Total Used Blocks' })
                    },
                    {
                        opcode: 'NumberOfBlockTypes',
                        blockType: Scratch.BlockType.REPORTER,
                        disableMonitor: true,
                        text: Scratch.translate({ id: 'Project0832.NumberOfBlockTypes', default: 'Number of Block Types' })
                    },
                    {
                        opcode: 'NumberOfSegments',
                        blockType: Scratch.BlockType.REPORTER,
                        disableMonitor: true,
                        text: Scratch.translate({ id: 'Project0832.NumberOfSegments', default: 'Number of Segments' })
                    },
                    {
                        opcode: 'NumberOfCostumes',
                        blockType: Scratch.BlockType.REPORTER,
                        disableMonitor: true,
                        text: Scratch.translate({ id: 'Project0832.NumberOfCostumes', default: 'Number of Costumes' })
                    },
                    {
                        opcode: 'NumberOfSounds',
                        blockType: Scratch.BlockType.REPORTER,
                        disableMonitor: true,
                        text: Scratch.translate({ id: 'Project0832.NumberOfSounds', default: 'Number of Sounds' })
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
            name: `${extensionId}.Project0832.Project0832`,
            description: `${extensionId}.Project0832.description`,
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
                [`${extensionId}.Project0832.Project0832`]: "项目",
                [`${extensionId}.Project0832.description`]: "在Gandi中读取项目信息",
            },
            en: {
                [`${extensionId}.Project0832.Project0832`]: "Project",
                [`${extensionId}.Project0832.description`]: "Read Project infomation in Gandi",
            },
        },
    };
    window.tempExt = extension;
})(Scratch);
