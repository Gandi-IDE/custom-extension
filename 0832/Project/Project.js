import { icon } from "./Project.svg";

Scratch.translate.setup({
    zh: {
        'Project': '项目',
        'description': '在Gandi中读取项目信息',
        'TotalUsedBlocks': '使用的块总数',
        'NumberOfBlockTypes': '块种类数',
        'NumberOfSegments': '段数',
        'NumberOfCostumes': '造型数',
        'NumberOfSounds': '声音数'
    },
    en: {
        'Project': 'Project',
        'description': 'Read project infomation in Gandi',
        'TotalUsedBlocks': 'Total Used Blocks',
        'NumberOfBlockTypes': 'Number Of Block Types',
        'NumberOfSegments': 'Number Of Segments',
        'NumberOfCostumes': 'Number Of Costumes',
        'NumberOfSounds': 'Number Of Sounds'
    }
});
let totalUsedBlocks, numberOfBlockTypes, numberOfSegments, numberOfCostumes, numberOfSounds;
const extensionId = 'Project';
class Project {
    constructor(runtime) {
        this.targets = runtime.targets;
    }
    calculate() {
        const targets = this.targets;
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

        totalUsedBlocks = targets.reduce((acc, target) => acc + Object.keys(target.blocks._blocks || {}).length, 0);
        numberOfBlockTypes = Object.keys(blocksUsed).length;
        numberOfSegments = segmentCount;
        numberOfCostumes = costumeCount;
        numberOfSounds = soundCount;
    }
    getInfo() {
        return {
            id: extensionId,
            name: Scratch.translate({ id: 'Project', default: 'Project' }),
            blocks: [
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
            ]
        };
    }
    TotalUsedBlocks() {
        this.calculate();
        return totalUsedBlocks;
    }

    NumberOfBlockTypes() {
        this.calculate();
        return numberOfBlockTypes;
    }

    NumberOfSegments() {
        this.calculate();
        return numberOfSegments;
    }

    NumberOfCostumes() {
        this.calculate();
        return numberOfCostumes;
    }

    NumberOfSounds() {
        this.calculate();
        return numberOfSounds;
    }
}

Scratch.extensions.register(new Project());

const extension = {
    info: {
        name: `${extensionId}.Project`,
        description: `${extensionId}.description`,
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
            [`${extensionId}.Project`]: "项目",
            [`${extensionId}.description`]: "在Gandi中读取项目信息",
        },
        en: {
            [`${extensionId}.Project`]: "Project",
            [`${extensionId}.description`]: "Read project infomation in Gandi",
        },
    },
};
window.tempExt = extension;